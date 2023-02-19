import {OnSignUpFieldValueChanged, SignInState, SignUpState} from "./types";
import {createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import authDependenciesContainer from "../di/inversify.config";
import {SignInUseCase} from "../domain/usecases/sign-in/sign-in.usecase";
import {SignUpUseCase} from "../domain/usecases/sign-up/sign-up.usecase";
import {SendEmailVerificationCodeResult, SignUpResult} from "../domain/usecases/sign-up/sign-up-usecase.types";
import {SignInResult} from "../domain/usecases/sign-in/sign-in-usecase.types";

const container = authDependenciesContainer

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

function OnSignUpFormFieldValueChanged(
    state: SignUpState,
    action: PayloadAction<OnSignUpFieldValueChanged>
): SignUpState {
    return  {
        ...state,
    }
}

export const signInThunk = createAsyncThunk<SignInResult, SignInState, {rejectValue: string}>(
    'sign-in/sign-in-clicked',
    async (state) => {
        const useCase = container.get<SignInUseCase>(SignInUseCase)

        return await useCase.performSignIn({...state})
    }
)

export const signUpThunk = createAsyncThunk<SignUpResult, SignUpState>(
    'sign-up/sign-up-clicked',
    async (state) => {
        const useCase = container.get<SignUpUseCase>(SignUpUseCase)

        return await useCase.performSignUp({...state})
    }
)

export const sendVerificationCodeThunk = createAsyncThunk<SendEmailVerificationCodeResult, SignUpState>(
    'sign-up/send-verification-code-clicked',
    async (state) => {
        const useCase = container.get<SignUpUseCase>(SignUpUseCase)

        return  await useCase.sendEmailVerificationCode({...state})
    }
)