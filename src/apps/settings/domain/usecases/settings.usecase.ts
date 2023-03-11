import {inject, injectable} from "inversify";
import {
    ChangeAccountEmailResult,
    ChangeAccountNicknameResult, ChangeAccountVisibilityResult,
    DeleteAccountResult,
    GetAccountSettingsResult
} from "./settings-usecase.types";
import {InputsValidator} from "../../../../common/services/validators/inputs.validator";
import TYPES from "../../di/types";
import {TokenRepository} from "../../../auth/repository/token.repository";
import {SettingsApi} from "../../api/settings-api";

@injectable()
export class SettingsUseCase {

    @inject(InputsValidator)
    private validator: InputsValidator | undefined

    @inject(TYPES.TokenRepository)
    private repository: TokenRepository | undefined

    @inject(TYPES.SettingsApi)
    private settingsApi: SettingsApi | undefined

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