import {SettingsApi} from "../settings-api";
import {inject, injectable} from "inversify";
import {
    ChangeAccountVisibilityResponse,
    ChangeEmailResponse,
    ChangeNicknameResponse,
    DeleteAccountResponse, GetAccountSettingsResponse
} from "../settings-api.types";
import {Response} from "../../../../common/api/types";
import TYPES from "../../di/types";
import {parseResponse} from "../../../../common/helpers/api-helper";
import {AxiosInstance} from "axios";

@injectable()
export class SettingsApiImpl implements SettingsApi {

    @inject(TYPES.SettingsAxios)
    private axios: AxiosInstance | undefined

    async getAccountSettings(): Promise<Response<GetAccountSettingsResponse>> {
        const response = await this.axios!.get('/')

        return parseResponse(response, (content) => {
            return {
                isAccountPrivate: content['private_account']
            }
        })
    }

    async changeAccountVisibility(isVisible: boolean): Promise<Response<ChangeAccountVisibilityResponse>> {
        const response = await this.axios!.post('/change-visibility', {
            new_is_visible: isVisible
        })

        return parseResponse(response, (content) => {
            return {
                result: content['result'],
                message: content['message'],
                isAccountVisible: content['is_account_visible'],
            }
        })
    }

    async changeEmail(newEmail: string): Promise<Response<ChangeEmailResponse>> {
        const response = await this.axios!.post('/change-email', {
            new_email: newEmail
        })

        return parseResponse(response, (content) => {
            return {
                result: content['result'],
                message: content['message']
            }
        })
    }

    async changeNickname(newNickname: string): Promise<Response<ChangeNicknameResponse>> {
        const response = await this.axios!.post('/change-nickname', {
            new_nickname: newNickname
        })

        return parseResponse(response, (content) => {
            return {
                result: content['result'],
                message: content['message']
            }
        })
    }

    async deleteAccount(): Promise<Response<DeleteAccountResponse>> {
        const response = await this.axios!.delete('/delete-account')

        return parseResponse(response, (content) => {
            return {
                result: content['result'],
                message: content['message'],
            }
        })
    }
}