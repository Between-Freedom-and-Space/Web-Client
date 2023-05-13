import {Response} from "../../../../../common/api/types";
import {
    ChangeAccountVisibilityResponse,
    ChangeEmailResponse,
    ChangeNicknameResponse,
    DeleteAccountResponse, GetAccountSettingsResponse
} from "./settings-api.types";

export interface SettingsApi {
    
    changeNickname(newNickname: string): Promise<Response<ChangeNicknameResponse>>

    changeEmail(newEmail: string): Promise<Response<ChangeEmailResponse>>

    changeAccountVisibility(isVisible: boolean): Promise<Response<ChangeAccountVisibilityResponse>>

    getAccountSettings(): Promise<Response<GetAccountSettingsResponse>>
    
    deleteAccount(): Promise<Response<DeleteAccountResponse>>
}