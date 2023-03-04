import {RecoverPasswordState} from "./types";
import {PayloadAction} from "@reduxjs/toolkit";

export function onRecoverEmailChanged(
    state: RecoverPasswordState,
    action: PayloadAction<string>
): RecoverPasswordState {
    return {
        ...state,
        email: action.payload
    }
}

export function onVerificationCodeChanged(
    state: RecoverPasswordState,
    action: PayloadAction<string>
): RecoverPasswordState {
    return {
        ...state,
        recoverCode: action.payload
    }
}

export function onNewPasswordChanged(
    state: RecoverPasswordState,
    action: PayloadAction<string>
): RecoverPasswordState {
    return {
        ...state,
    }
}

export function onRepeatedNewPasswordChanged(
    state: RecoverPasswordState,
    action: PayloadAction<string>
): RecoverPasswordState {
    return {
        ...state,
    }
}