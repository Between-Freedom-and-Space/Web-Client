import {CheckCodeStatus, SendCodeAgainStatus} from "./types";
import {ButtonState} from "../../../../../common/components/ui-kit/button/types";

export function formatTimeRemainedSeconds(seconds: number): string {
    const minutes = seconds / 60;
    return `${minutes}:${seconds % 60}`
}

export function getCheckCodeButtonState(status: CheckCodeStatus): ButtonState {
    return status === CheckCodeStatus.IN_PROGRESS ? ButtonState.LOADING : ButtonState.ACTIVE
}

export function getSendAgainButtonState(status: SendCodeAgainStatus): ButtonState {
    return status === SendCodeAgainStatus.IN_PROGRESS ? ButtonState.LOADING : ButtonState.ACTIVE
}