import {ButtonState} from "../../../../../common/components/ui-kit/button/types";
import {EnterEmailStatus} from "./types";

export function getSendButtonState(status: EnterEmailStatus): ButtonState {
    return status === EnterEmailStatus.SENDING_CODE ? ButtonState.LOADING : ButtonState.ACTIVE
}