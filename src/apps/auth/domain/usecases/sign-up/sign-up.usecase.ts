import {inject, injectable} from "inversify";
import {
    PerformSignUpData,
    SendEmailVerificationCodeData,
    SendEmailVerificationCodeResult, SignUpFailure, SignUpResult, SignUpSuccess
} from "./sign-up-usecase.types";
import {AuthenticateApi} from "../../../api/auth-api";
import TYPES from "../../../di/types";
import {PasswordEncryptor} from "../../../../../common/helpers/security/password-encryptor";
import {TokenRepository} from "../../../repository/token.repository";
import {AuthenticateInputsValidator} from "../../validators/authenticate-inputs.validator";
import {ValidationResultType} from "../../validators/types";
import {MailingApi} from "../../../api/mailing-api";
import {SecurityVariableRepository} from "../../../repository/security-variable.repository";
import {SecurityVariableGenerator} from "../../services/security-variable.generator";

@injectable()
export class SignUpUseCase {

    @inject(TYPES.AuthenticateApi)
    private authApi: AuthenticateApi | undefined
    @inject(TYPES.MailingApi)
    private mailingApi: MailingApi | undefined

    @inject(TYPES.PasswordEncryptor)
    private passwordEncryptor: PasswordEncryptor | undefined
    @inject(TYPES.SecurityVariableGenerator)
    private securityVariableGenerator: SecurityVariableGenerator | undefined

    @inject(TYPES.TokenRepository)
    private tokenRepository: TokenRepository | undefined
    @inject(TYPES.SecurityVariableRepository)
    private securityVariableRepository: SecurityVariableRepository | undefined

    @inject(AuthenticateInputsValidator)
    private validator: AuthenticateInputsValidator | undefined

    public sendEmailVerificationCode({email}: SendEmailVerificationCodeData): SendEmailVerificationCodeResult {
        const emailValidationResult = this.validator!.validateEmail(email)
        if (emailValidationResult.type !== ValidationResultType.SUCCESS) {
            return {
                type: 'failure',
                message: emailValidationResult.message
            }
        }

        const securityVariable = this.securityVariableGenerator!.generate()
        const {error} = this.mailingApi!.sendEmailVerificationCode({
            email, securityVariable
        })

       if (error !== undefined) {
           return {
               type: 'failure',
               message: error?.message
           }
       }

       return { type: 'success' }
    }

    public performSignUp(data: PerformSignUpData): SignUpResult {
        const nicknameValidation = this.validator!.validateNickname(data.nickname)
        const nameValidation = this.validator!.validateName(data.name)
        const descriptionValidation = this.validator!.validateProfileDescription(data.description)
        const locationValidation = this.validator!.validateLocation(data.location)
        const emailValidation = this.validator!.validateEmail(data.email)
        const passwordValidation = this.validator!.validatePassword(data.password)
        const repeatedPasswordValidation = this.validator!.validatePasswordMatches(data.password, data.repeatedPassword)

        if (nicknameValidation.type !== ValidationResultType.SUCCESS) {
            return this.failWith(nicknameValidation.message)
        }
        if (nameValidation.type !== ValidationResultType.SUCCESS) {
            return this.failWith(nameValidation.message)
        }
        if (descriptionValidation.type !== ValidationResultType.SUCCESS) {
            return this.failWith(descriptionValidation.message)
        }
        if (locationValidation.type !== ValidationResultType.SUCCESS) {
            return this.failWith(locationValidation.message)
        }
        if (emailValidation.type !== ValidationResultType.SUCCESS) {
            return this.failWith(emailValidation.message)
        }
        if (passwordValidation.type !== ValidationResultType.SUCCESS) {
            return this.failWith(passwordValidation.message)
        }
        if (repeatedPasswordValidation.type !== ValidationResultType.SUCCESS) {
            return this.failWith(repeatedPasswordValidation.message)
        }

        const securityVariable = this.securityVariableRepository!.get() || this.securityVariableGenerator!.generate()
        const emailCodeVerification = this.mailingApi!.verifyEmailVerificationCode({
            verificationCode: data.verificationCode,
            targetEmail: data.email,
            securityVariable,
        })

        if (emailCodeVerification.error !== undefined) {
            return this.failWith(emailCodeVerification.error.message)
        }
        if (emailCodeVerification.content === undefined) {
            return this.failWith()
        }
        if (emailCodeVerification.content.result !== "Validated") {
            return this.failWith('Invalid email verification code')
        }

        const signUpResult = this.authApi!.registerUser({
            mail: data.email,
            nickname: data.nickname,
            passwordEncrypted: this.passwordEncryptor!.encryptPassword(data.password),
            nameAlias: data.name,
            description: data.description,
            location: data.location
        })

        if (signUpResult.error !== undefined) {
            return this.failWith(signUpResult.error.message)
        }

        return this.successWith()
    }

    // noinspection JSMethodCanBeStatic
    private failWith(message?: string): SignUpFailure {
        return {
            message: message || 'Something went wrong, please try later',
        }
    }

    // noinspection JSMethodCanBeStatic
    private successWith(): SignUpSuccess {
        return { }
    }
}