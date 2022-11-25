import {OnSignUpFieldValueChanged, SignInState, SignUpState} from "./types";
import {PayloadAction} from "@reduxjs/toolkit";

export function onSignInClicked(state: SignInState): SignInState {
    return {
        ...state,
    }
}

export function onSignInNicknameChanged(state: SignInState, action: PayloadAction<string>): SignInState {
    return {
        ...state,
        nickname: action.payload
    }
}

export function onSignInPasswordChanged(state: SignInState, action: PayloadAction<string>): SignInState {
    return {
        ...state,
        password: action.payload
    }
}

export function onSignUpClicked(state: SignUpState): SignUpState {
    return {
        ...state,
    }
}

export function OnSendVerificationCodeClicked(state: SignUpState): SignUpState {
    return {
        ...state,
    }
}

export function OnSignUpFormFieldValueChanged(
    state: SignUpState,
    action: PayloadAction<OnSignUpFieldValueChanged>
): SignUpState {
    return  {
        ...state,
    }
}