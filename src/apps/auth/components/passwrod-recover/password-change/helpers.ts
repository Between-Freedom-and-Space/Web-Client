import {PasswordRecoverChangeState} from "./types";
import {PasswordInputState} from "../../../../../common/components/ui-kit/inputs/password/types";

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