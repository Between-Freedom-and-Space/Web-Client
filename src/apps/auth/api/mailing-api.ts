import {
    SendEmailVerificationCodeRequest,
    VerifyCodeResponse,
    VerifyEmailVerificationCodeRequest
} from "./mailing-api.types";
import {Response} from "../../../common/api/types";

export interface MailingApi {

    sendEmailVerificationCode(data: SendEmailVerificationCodeRequest): Promise<Response<void>>

    verifyEmailVerificationCode(data: VerifyEmailVerificationCodeRequest): Promise<Response<VerifyCodeResponse>>
}