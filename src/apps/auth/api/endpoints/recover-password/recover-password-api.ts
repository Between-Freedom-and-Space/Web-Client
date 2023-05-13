import {Response} from "../../../../../common/api/types";
import {
    CheckVerifiedCodeResponse,
    RecoverPasswordRequest, RecoverPasswordResponse,
    SendVerifiedCodeResponse
} from "./recover-password-api.types";

export interface RecoverPasswordApi {

    sendVerifiedCode(email: string): Promise<Response<SendVerifiedCodeResponse>>

    checkVerifiedCode(email: string, code: string): Promise<Response<CheckVerifiedCodeResponse>>

    recoverPassword(request: RecoverPasswordRequest): Promise<Response<RecoverPasswordResponse>>
}