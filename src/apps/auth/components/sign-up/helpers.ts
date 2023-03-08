import {AuthState, SignUpState, VerificationCodeState} from "../../redux/types";
import {ButtonState} from "../../../../common/components/ui-kit/button/types";

export function getSignUpButtonState(state: SignUpState): ButtonState {
    return state.state === AuthState.LOADING ? ButtonState.LOADING : ButtonState.ACTIVE
}

export function getSendCodeButtonState(state: SignUpState): ButtonState {
    return state.verificationCodeState === VerificationCodeState.SENDING ? ButtonState.LOADING : ButtonState.ACTIVE
}