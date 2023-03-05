import {RecoverPasswordApi} from "../recover-password-api";
import {inject, injectable} from "inversify";
import TYPES from "../../di/types";
import {AxiosInstance} from "axios";
import {
    CheckVerifiedCodeResponse, RecoverPasswordRequest,
    RecoverPasswordResponse,
    SendVerifiedCodeResponse
} from "../recover-password-api.types";
import {Response} from "../../../../common/api/types";
import {parseResponse} from "../../../../common/helpers/api-helper";

@injectable()
export class RecoverPasswordApiImpl implements RecoverPasswordApi {

    @inject(TYPES.AuthAxiosInstance)
    private axios: AxiosInstance | undefined

    async checkVerifiedCode(email: string, code: string): Promise<Response<CheckVerifiedCodeResponse>> {
        const response = await this.axios!.post('/recover-password/check-code', {
            email: email,
            verified_code: code,
        })
        return parseResponse(response, (content: any) => {
            return {
                checkResult: content["check_result"],
                message: content["message"],
            }
        })
    }

    async sendVerifiedCode(email: string): Promise<Response<SendVerifiedCodeResponse>> {
        const response = await this.axios!.post('/recover-password/send-code', {
            email: email
        })

        return parseResponse(response, (content: any) => {
            return {
                result: content["send_result"],
                message: content["message"],
            }
        })
    }

    async recoverPassword(request: RecoverPasswordRequest): Promise<Response<RecoverPasswordResponse>> {
        const response = await this.axios!.post('/recover-password/recover', {
            email: request.email,
            verified_code: request.code,
            new_password: request.newPassword
        })

        return parseResponse(response, (content: any) => {
            return {
                result: content["recover_result"],
                message: content["message"],
            }
        })
    }
}