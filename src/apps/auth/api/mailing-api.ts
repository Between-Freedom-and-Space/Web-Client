import { SendEmailVerificationCodeRequest, VerifiyCodeResponse, VerifyEmailVerificationCodeRequest } from "./mailing-api.types";

export interface MailingApi {

    sendEmailVerificationCode(data: SendEmailVerificationCodeRequest): void

    verifyEmailVerificationCode(data: VerifyEmailVerificationCodeRequest): VerifiyCodeResponse
}