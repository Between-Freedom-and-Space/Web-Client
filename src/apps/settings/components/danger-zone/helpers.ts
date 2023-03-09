import {ButtonState} from "../../../../common/components/ui-kit/button/types";

export function getDangerZoneButtonState(isLoading: boolean): ButtonState {
    return isLoading ? ButtonState.LOADING : ButtonState.ACTIVE
}