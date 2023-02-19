import {OnSignUpFieldValueChanged, SignInState, SignUpState} from "./types";
import {createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import authDependenciesContainer from "../di/inversify.config";
import {SignInUseCase} from "../domain/usecases/sign-in/sign-in.usecase";
import {SignUpUseCase} from "../domain/usecases/sign-up/sign-up.usecase";
import {SendEmailVerificationCodeResult, SignUpResult} from "../domain/usecases/sign-up/sign-up-usecase.types";
import {SignInResult, SignInResultFailure} from "../domain/usecases/sign-in/sign-in-usecase.types";
import {resultIsFailure as signInIsFailure} from "../domain/usecases/sign-in/sign-in-usecase.helpers";
import {
    resultIsFailure as signUpIsFailure,
    verificationCodeResultIsFailure
} from "../domain/usecases/sign-up/sign-up-usecase.helpers";

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

export function onSignUpFormFieldValueChanged(
    state: SignUpState,
    action: PayloadAction<OnSignUpFieldValueChanged>
): SignUpState {
    const payload = action.payload
    let resultState = {...state}

    switch (payload.field) {
        case "description": {
            resultState = {
                ...resultState,
                description: payload.value as string,
            }
            break
        }
        case "email": {
            resultState = {
                ...resultState,
                email: payload.value as string,
            }
            break
        }
        case "location": {
            resultState = {
                ...resultState,
                location: payload.value as string,
            }
            break
        }
        case "name": {
            resultState = {
                ...resultState,
                name: payload.value as string,
            }
            break
        }
        case "repeatedPassword": {
            resultState = {
                ...resultState,
                repeatedPassword: payload.value as string,
            }
            break
        }
        case "password": {
            resultState = {
                ...resultState,
                password: payload.value as string,
            }
            break
        }
        case "nickname": {
            resultState = {
                ...resultState,
                nickname: payload.value as string,
            }
            break
        }
        case "verificationCode": {
            resultState = {
                ...resultState,
                verificationCode: payload.value as string,
            }
            break
        }
    }

    return resultState
}

export const signInThunk = createAsyncThunk<SignInResult, SignInState, {rejectValue: string}>(
    'sign-in/sign-in-clicked',
    async (state, {rejectWithValue}) => {
        const useCase = container.get<SignInUseCase>(SignInUseCase)

        const result = await useCase.performSignIn({...state})

        if (signInIsFailure(result)) {
            return rejectWithValue(result.reason)
        } else {
            return result
        }
    }
)

export const signUpThunk = createAsyncThunk<SignUpResult, SignUpState, {rejectValue: string}>(
    'sign-up/sign-up-clicked',
    async (state, {rejectWithValue}) => {
        const useCase = container.get<SignUpUseCase>(SignUpUseCase)

        const result = await useCase.performSignUp({...state})

        if (signUpIsFailure(result)) {
            return rejectWithValue(result.message)
        } else {
            return result
        }
    }
)

export const sendVerificationCodeThunk = createAsyncThunk<SendEmailVerificationCodeResult, SignUpState, {rejectValue: string}>(
    'sign-up/send-verification-code-clicked',
    async (state, {rejectWithValue}) => {
        const useCase = container.get<SignUpUseCase>(SignUpUseCase)

        const result = await useCase.sendEmailVerificationCode({...state})

        if (verificationCodeResultIsFailure(result)) {
            return rejectWithValue(result.message!)
        } else {
            return result
        }
    }
)