import {PasswordRecoverChangeState, PasswordRecoverStatus} from "./types";
import {PasswordInputState} from "../../../../../common/components/ui-kit/inputs/password/types";
import {ButtonState} from "../../../../../common/components/ui-kit/button/types";

export function mapPasswordRecoverState(state: PasswordRecoverChangeState): PasswordInputState {
    switch (state) {
    case PasswordRecoverChangeState.PASSWORDS_MATCH:
        return PasswordInputState.INPUT_IS_VALID
    case PasswordRecoverChangeState.PASSWORDS_NOT_MATCH:
        return PasswordInputState.INPUT_IS_INVALID
    case PasswordRecoverChangeState.IN_PROGRESS:
        return PasswordInputState.INPUT_IN_PROGRESS
    }

    return PasswordInputState.INPUT_IN_PROGRESS
}

export function getPasswordRecoverButtonState(status: PasswordRecoverStatus): ButtonState {
    return status === PasswordRecoverStatus.IN_PROGRESS ? ButtonState.LOADING : ButtonState.ACTIVE
}