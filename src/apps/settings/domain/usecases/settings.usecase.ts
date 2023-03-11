import {injectable} from "inversify";
import {
    ChangeAccountEmailResult,
    ChangeAccountNicknameResult, ChangeAccountVisibilityResult,
    DeleteAccountResult,
    GetAccountSettingsResult
} from "./settings-usecase.types";

@injectable()
export class SettingsUseCase {

    public async deleteAccount(): Promise<DeleteAccountResult> {
        throw new Error()
    }

    public async getAccountSettings() : Promise<GetAccountSettingsResult> {
        throw new Error()
    }

    public async changeAccountNickname(
        newNickname: string
    ): Promise<ChangeAccountNicknameResult> {
        throw new Error()
    }

    public async changeAccountEmail(
        newEmail: string
    ): Promise<ChangeAccountEmailResult> {
        throw new Error()
    }

    public async changeAccountVisibility(
        newIsAccountPrivate: boolean
    ): Promise<ChangeAccountVisibilityResult> {
        throw new Error()
    }
}