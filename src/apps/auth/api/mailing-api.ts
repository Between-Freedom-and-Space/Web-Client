import { SendEmailVerificationCodeRequest, VerifyCodeResponse, VerifyEmailVerificationCodeRequest } from "./mailing-api.types";
import {Response} from "../../../common/api/types";

export interface MailingApi {

    sendEmailVerificationCode(data: SendEmailVerificationCodeRequest): Response<void>

    verifyEmailVerificationCode(data: VerifyEmailVerificationCodeRequest): Response<VerifyCodeResponse>
}