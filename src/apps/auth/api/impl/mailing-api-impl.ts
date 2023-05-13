import {MailingApi} from "../endpoints/mailing/mailing-api";
import {
    SendEmailVerificationCodeRequest,
    VerifyCodeResponse,
    VerifyEmailVerificationCodeRequest
} from "../endpoints/mailing/mailing-api.types";
import {inject, injectable} from "inversify";
import {AxiosInstance} from "axios";
import TYPES from "../../di/types";
import {Response} from "../../../../common/api/types";
import {parseResponse} from "../../../../common/helpers/api-helper";

@injectable()
export class MailingApiImpl implements MailingApi {

    @inject(TYPES.AuthAxiosInstance)
    private axios: AxiosInstance | undefined

    public async sendEmailVerificationCode(data: SendEmailVerificationCodeRequest): Promise<Response<void>> {
        const response = await this.axios!.post('/registration/send/email/code', {
            email: data.email,
            security_variable: data.securityVariable
        })

        return parseResponse(response.data)
    }

    public async verifyEmailVerificationCode(
        data: VerifyEmailVerificationCodeRequest
    ): Promise<Response<VerifyCodeResponse>> {
        const response = await this.axios!.post('/registration/validate/email/code', {
            target_email: data.targetEmail,
            verification_code: data.verificationCode,
            security_variable: data.securityVariable
        })

        return parseResponse(response.data, (content: any) => {
            const verifyResult = content['verify_result']
            if (verifyResult === 'Invalid Code') {
                return {
                    result: 'Invalid Code'
                }
            }
            if (verifyResult === 'Validated') {
                return {
                    result: 'Validated'
                }
            }
            return {
                result: 'Not Found'
            }
        })
    }

}