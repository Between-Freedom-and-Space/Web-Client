import {MailingApi} from "../mailing-api";
import { SendEmailVerificationCodeRequest, VerifyCodeResponse, VerifyEmailVerificationCodeRequest } from "../mailing-api.types";
import {inject, injectable} from "inversify";
import {AxiosInstance} from "axios";
import TYPES from "../../di/types";
import {Response} from "../../../../common/api/types";

@injectable()
export class MailingApiImpl implements MailingApi {

    @inject(TYPES.AuthAxiosInstance)
    private axios: AxiosInstance | undefined

    public async sendEmailVerificationCode(data: SendEmailVerificationCodeRequest): Promise<Response<void>> {
        const result = await this.axios?.post('/mailing/email/verificationCode/send', {
            email: data.email,
            security_variable: data.securityVariable
        })
        throw new Error('Not implemented yet')
    }

    public async verifyEmailVerificationCode(data: VerifyEmailVerificationCodeRequest): Promise<Response<VerifyCodeResponse>> {
        throw new Error('Not implemented yet')
    }

}