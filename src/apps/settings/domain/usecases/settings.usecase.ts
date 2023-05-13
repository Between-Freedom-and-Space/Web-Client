import {inject, injectable} from "inversify";
import {
    ChangeAccountEmailResult,
    ChangeAccountNicknameResult, ChangeAccountVisibilityFailure,
    ChangeAccountVisibilityResult, ChangeAccountVisibilitySuccess,
    DeleteAccountResult, GetAccountSettingsFailure,
    GetAccountSettingsResult, GetAccountSettingsSuccess
} from "./settings-usecase.types";
import {InputsValidator} from "../../../../common/services/validators/inputs.validator";
import TYPES from "../../di/types";
import {SettingsApi} from "../../api/endpoints/settings/settings-api";
import {ValidationResultType} from "../../../../common/services/validators/types";

@injectable()
export class SettingsUseCase {

    @inject(InputsValidator)
    private validator: InputsValidator | undefined

    @inject(TYPES.SettingsApi)
    private settingsApi: SettingsApi | undefined

    public async deleteAccount(): Promise<DeleteAccountResult> {
        const {content, error} = await this.settingsApi!.deleteAccount()

        if (!content) {
            return {
                type: 'failure',
                message: error?.message,
            }
        }
        if (content.result === 'failure') {
            return {
                type: 'failure',
                message: content.message
            }
        }

        return {type: 'success'}
    }

    public async getAccountSettings() : Promise<GetAccountSettingsResult> {
        const {content, error} = await this.settingsApi!.getAccountSettings()

        if (!content) {
            return {
                type: 'failure',
                message: error?.message,
            } as GetAccountSettingsFailure
        }

        return {
            type: 'success',
            isAccountPrivate: content.isAccountPrivate
        } as GetAccountSettingsSuccess
    }

    public async changeAccountNickname(
        newNickname: string
    ): Promise<ChangeAccountNicknameResult> {
        const nicknameValidation = this.validator!.validateNickname(newNickname)

        if (nicknameValidation.type === ValidationResultType.FAILURE) {
            return {
                type: 'failure',
                message: nicknameValidation.message,
            }
        }

        const {content, error} = await this.settingsApi!.changeNickname(newNickname)

        if (!content) {
            return {
                type: 'failure',
                message: error?.message,
            }
        }
        if (content.result === 'failure') {
            return {
                type: 'failure',
                message: content.message
            }
        }

        return {type: 'success'}
    }

    public async changeAccountEmail(
        newEmail: string
    ): Promise<ChangeAccountEmailResult> {
        const emailValidation = this.validator!.validateEmail(newEmail)

        if (emailValidation.type === ValidationResultType.FAILURE) {
            return {
                type: 'failure',
                message: emailValidation.message,
            }
        }

        const {content, error} = await this.settingsApi!.changeEmail(newEmail)

        if (!content) {
            return {
                type: 'failure',
                message: error?.message,
            }
        }
        if (content.result === 'failure') {
            return {
                type: 'failure',
                message: content.message
            }
        }

        return {type: 'success'}
    }

    public async changeAccountVisibility(
        newIsAccountPrivate: boolean
    ): Promise<ChangeAccountVisibilityResult> {
        const {content, error} = await this.settingsApi!.changeAccountVisibility(!newIsAccountPrivate)

        if (!content) {
            return {
                type: 'failure',
                message: error?.message,
            } as ChangeAccountVisibilityFailure
        }
        if (content.result === 'failure') {
            return {
                type: 'failure',
                message: content.message
            } as ChangeAccountVisibilityFailure
        }

        return {
            type: 'success',
            isAccountPrivate: !content.isAccountVisible
        } as ChangeAccountVisibilitySuccess
    }
}