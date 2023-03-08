import {AuthState, SignInState} from "../../redux/types";
import {ButtonState} from "../../../../common/components/ui-kit/button/types";

export function getSignInButtonState(state: SignInState): ButtonState {
    return state.state === AuthState.LOADING ? ButtonState.LOADING : ButtonState.ACTIVE
}