import {MailingApi} from "../mailing-api";
import { SendEmailVerificationCodeRequest, VerifiyCodeResponse, VerifyEmailVerificationCodeRequest } from "../mailing-api.types";
import {inject, injectable} from "inversify";
import {AxiosInstance} from "axios";
import TYPES from "../../di/types";

@injectable()
export class MailingApiImpl implements MailingApi {

    @inject(TYPES.AuthAxiosInstance)
    private axios: AxiosInstance | undefined

    sendEmailVerificationCode(data: SendEmailVerificationCodeRequest): void {
    }

    verifyEmailVerificationCode(data: VerifyEmailVerificationCodeRequest): VerifiyCodeResponse {
        throw new Error('Not implemented yet')
    }

}