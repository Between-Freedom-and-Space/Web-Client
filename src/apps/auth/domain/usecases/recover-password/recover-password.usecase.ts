import {inject, injectable} from "inversify";
import {PasswordRecoverChangeState} from "../../../components/passwrod-recover/password-change/types";
import {AuthenticateInputsValidator} from "../../validators/authenticate-inputs.validator";
import TYPES from "../../../di/types";
import {TokenRepository} from "../../../repository/token.repository";
import {PasswordEncryptor} from "../../../../../common/helpers/security/password-encryptor";
import {RecoverPasswordApi} from "../../../api/recover-password-api";
import {
    CheckVerificationCodeResult,
    RecoverPasswordData,
    RecoverPasswordFailure,
    RecoverPasswordResult,
    SendVerificationCodeResult
} from "./recover-password-usecase.types";
import {ValidationResultType} from "../../validators/types";

@injectable()
export class RecoverPasswordUseCase {

    @inject(AuthenticateInputsValidator)
    private validator: AuthenticateInputsValidator | undefined

    @inject(TYPES.TokenRepository)
    private repository: TokenRepository | undefined

    @inject(TYPES.PasswordEncryptor)
    private passwordEncryptor: PasswordEncryptor | undefined

    @inject(TYPES.RecoverPasswordApi)
    private recoverPasswordApi: RecoverPasswordApi | undefined

    public getPasswordRecoverChangeState(
        newPassword: string,
        repeatedNewPassword: string
    ): PasswordRecoverChangeState {
        if (newPassword.length === 0 && repeatedNewPassword.length === 0) {
            return PasswordRecoverChangeState.IN_PROGRESS
        }
        if (newPassword === repeatedNewPassword) {
            return PasswordRecoverChangeState.PASSWORDS_MATCH
        } else {
            return PasswordRecoverChangeState.PASSWORDS_NOT_MATCH
        }
    }

    public async sendVerificationCode(
        email: string,
    ): Promise<SendVerificationCodeResult> {
        const emailValidation = this.validator!.validateEmail(email)

        if (emailValidation.type === ValidationResultType.FAILURE) {
            return {
                type: 'failure',
                message: emailValidation.message
            }
        }

        const {content, error} = await this.recoverPasswordApi!.sendVerifiedCode(email)

        if (!content) {
            return {
                type: 'failure',
                message: error?.message || 'Something went wrong'
            }
        }
        if (content.result === 'failure') {
            return {
                type: 'failure',
                message: content.message || 'Something went wrong'
            }
        }

        return {
            type: 'success'
        }
    }

    public async checkVerificationCode(
        email: string,
        code: string
    ): Promise<CheckVerificationCodeResult> {
        const emailValidation = this.validator!.validateEmail(email)
        const codeValidation = this.validator!.validateVerifiedCode(code)

        if (emailValidation.type === ValidationResultType.FAILURE) {
            return {
                type: 'rejected',
                message: emailValidation.message
            }
        }
        if (codeValidation.type === ValidationResultType.FAILURE) {
            return {
                type: 'rejected',
                message: codeValidation.message,
            }
        }

        const {content, error} = await this.recoverPasswordApi!.checkVerifiedCode(email, code)

        if (!content) {
            return {
                type: 'rejected',
                message: error?.message || 'Something went wrong'
            }
        }
        if (content.checkResult === 'invalid') {
            return {
                type: 'rejected',
                message: content.message || 'Something went wrong'
            }
        }

        return {
            type: 'verified'
        }
    }

    public async recoverPassword({
        email,
        verificationCode,
        newPassword,
        repeatedNewPassword,
    }: RecoverPasswordData): Promise<RecoverPasswordResult> {
        const emailValidation = this.validator!.validateEmail(email)
        const codeValidation = this.validator!.validateVerifiedCode(verificationCode)
        const passwordValidation = this.validator!.validatePassword(newPassword)
        const repeatedPasswordValidation = this.validator!.validatePasswordMatches(newPassword, repeatedNewPassword)

        if (emailValidation.type === ValidationResultType.FAILURE) {
            return this.failRecover(emailValidation.message)
        }
        if (codeValidation.type === ValidationResultType.FAILURE) {
            return this.failRecover(codeValidation.message)
        }
        if (passwordValidation.type === ValidationResultType.FAILURE) {
            return this.failRecover(passwordValidation.message)
        }
        if (repeatedPasswordValidation.type === ValidationResultType.FAILURE) {
            return this.failRecover(repeatedPasswordValidation.message)
        }

        const {content, error} = await this.recoverPasswordApi!.recoverPassword({
            email: email,
            code: verificationCode,
            newPassword: newPassword,
        })

        if (!content) {
            return this.failRecover(error?.message)
        }
        if (content.result === 'failure') {
            return this.failRecover(content.message)
        }

        return { type: 'success'}
    }

    private failRecover(message?: string): RecoverPasswordFailure {
        return {
            type: 'failure',
            message: message || 'Something went wrong'
        }
    }
}