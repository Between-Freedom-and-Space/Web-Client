import {RecoverPasswordState} from "../../redux/types";
import {EnterEmailStatus} from "./enter-email/types";
import {CheckCodeStatus, SendCodeAgainStatus} from "./enter-code/types";
import {PasswordRecoverStatus} from "./password-change/types";

export function getEnterEmailStatus(state: RecoverPasswordState): EnterEmailStatus {
    return state.isVerifiedCodeSending ? EnterEmailStatus.SENDING_CODE : EnterEmailStatus.ENTERING_EMAIL
}

export function getCheckCodeStatus(state: RecoverPasswordState): CheckCodeStatus {
    return state.isVerifiedCodeChecking ? CheckCodeStatus.IN_PROGRESS : CheckCodeStatus.NOT_CHECKING
}

export function getSendCodeAgainStatus(state: RecoverPasswordState): SendCodeAgainStatus {
    return state.isVerifiedCodeSending ? SendCodeAgainStatus.IN_PROGRESS : SendCodeAgainStatus.NOT_SENDING
}

export function getPasswordRecoverStatus(state: RecoverPasswordState): PasswordRecoverStatus {
    return state.isPasswordRecovering ? PasswordRecoverStatus.IN_PROGRESS : PasswordRecoverStatus.NOT_RECOVERING
}