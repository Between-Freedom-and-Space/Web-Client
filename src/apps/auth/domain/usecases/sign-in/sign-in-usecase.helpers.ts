import {SignInResult, SignInResultFailure, SignInResultSuccess} from "./sign-in-usecase.types";

export function resultIsSuccess(result: SignInResult): result is SignInResultSuccess {
    return 'accessToken' in result && 'refreshToken' in result
}

export function resultIsFailure(result: SignInResult): result is SignInResultFailure {
    return 'reason' in result
}