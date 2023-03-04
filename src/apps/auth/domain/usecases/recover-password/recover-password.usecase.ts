import {inject, injectable} from "inversify";
import {PasswordRecoverChangeState} from "../../../components/passwrod-recover/password-change/types";
import {AuthenticateInputsValidator} from "../../validators/authenticate-inputs.validator";
import TYPES from "../../../di/types";
import {TokenRepository} from "../../../repository/token.repository";
import {PasswordEncryptor} from "../../../../../common/helpers/security/password-encryptor";
import {RecoverPasswordApi} from "../../../api/recover-password-api";
import {
    CheckVerificationCodeResult, RecoverPasswordData, RecoverPasswordFailure, RecoverPasswordResult,
    SendVerificationCodeResult
} from "./recover-password-usecase.types";

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
        return {
            type: 'failure',
            message: 'Not implemented yet'
        }
    }

    public async checkVerificationCode(
        email: string,
        code: string
    ): Promise<CheckVerificationCodeResult> {
        return {
            type: 'rejected',
            message: 'Not implemented yet'
        }
    }

    public async recoverPassword(data: RecoverPasswordData): Promise<RecoverPasswordResult> {
        return {
            type: 'failure',
            message: 'Not implemented yet'
        } as RecoverPasswordFailure
    }
}