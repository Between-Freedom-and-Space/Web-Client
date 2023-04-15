import config from './assets/config.json'
import {PostEditType} from "../../redux/edit-types";
import {ButtonState} from "../../../../common/components/ui-kit/button/types";

export function getCancelButtonLabel(): string {
    return config.cancel.label
}

export function getSaveButtonLabel(type: PostEditType): string {
    return type === PostEditType.NEW_POST ? config.create.label : config.update.label
}

export function getSaveButtonState(isLoading: boolean): ButtonState {
    return isLoading ? ButtonState.LOADING : ButtonState.ACTIVE
}