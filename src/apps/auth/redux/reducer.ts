import {OnSignUpFieldValueChanged, SignInState, SignUpState} from "./types";
import {PayloadAction} from "@reduxjs/toolkit";
import authDependenciesContainer from "../di/inversify.config";
import {SignInUseCase} from "../domain/usecases/sign-in/sign-in.usecase";
import {SignUpUseCase} from "../domain/usecases/sign-up/sign-up.usecase";

const container = authDependenciesContainer

const signInUseCase = container.get<SignInUseCase>(SignInUseCase)
const signUpUseCase = container.get<SignUpUseCase>(SignUpUseCase)

export async function onSignInClicked(state: SignInState): Promise<SignInState> {
    const signInResult = await signInUseCase.performSignIn(state)

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

export async function onSignUpClicked(state: SignUpState): Promise<SignUpState> {
    const signUpResult = await signUpUseCase.performSignUp(state)

    return {
        ...state,
    }
}

export async function OnSendVerificationCodeClicked(state: SignUpState): Promise<SignUpState> {
    const sendCodeResult = await signUpUseCase.sendEmailVerificationCode(state)
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