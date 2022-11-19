import {inject, injectable} from "inversify";
import {PerformSignInData, SignInResult, SignInResultFailure, SignInResultSuccess} from "./sign-in-usecase.types";
import {AuthenticateInputsValidator} from "../../validators/authenticate-inputs.validator";
import {AuthenticateApi} from "../../../api/auth-api";
import TYPES from "../../../di/types";
import {TokenRepository} from "../../../repository/token.repository";
import {ValidationResultType} from "../../validators/types";
import {PasswordEncryptor} from "../../../../../common/helpers/security/password-encryptor";

@injectable()
export class SignInUseCase {

    @inject(AuthenticateInputsValidator)
    private validator: AuthenticateInputsValidator | undefined

    @inject(TYPES.AuthenticateApi)
    private authApi: AuthenticateApi | undefined

    @inject(TYPES.TokenRepository)
    private repository: TokenRepository | undefined

    @inject(TYPES.PasswordEncryptor)
    private passwordEncryptor: PasswordEncryptor | undefined

    public async performSignIn({nickname, password}: PerformSignInData): Promise<SignInResult> {
        const nicknameValidationResult = this.validator!.validateNickname(nickname)
        const passwordValidationResult = this.validator!.validatePassword(password)
        if (nicknameValidationResult.type === ValidationResultType.FAILURE) {
            return this.failWith(nicknameValidationResult.message)
        }
        if (passwordValidationResult.type === ValidationResultType.FAILURE) {
            return this.failWith(passwordValidationResult.message)
        }

        const { content, error } = await this.authApi!.authenticateUser({
            nickname, passwordEncoded: this.passwordEncryptor!.encryptPassword(password)
        })

        if (!content) {
            return this.failWith(error?.message, error?.errorId)
        }

        this.repository?.saveTokens({
            accessToken: content.accessToken,
            refreshToken: content.refreshToken
        })

        return this.successWith(content.accessToken, content.refreshToken)
    }

    // noinspection JSMethodCanBeStatic
    private failWith(message?: string, code?: number): SignInResultFailure {
        return {
            reason: message || 'Something went wrong, please try later',
            code
        }
    }

    // noinspection JSMethodCanBeStatic
    private successWith(accessToken: string, refreshToken: string): SignInResultSuccess {
        return {
            accessToken, refreshToken
        }
    }
}
