import {SendEmailVerificationCodeResult, SignUpFailure, SignUpResult, SignUpSuccess} from "./sign-up-usecase.types";

export function resultIsSuccess(result: SignUpResult): result is SignUpSuccess {
    return !resultIsFailure(result)
}

export function resultIsFailure(result: SignUpResult): result is SignUpFailure {
    return 'message' in result
}

export function verificationCodeResultIsSuccess(result: SendEmailVerificationCodeResult): boolean {
    return result.type === "success"
}

export function verificationCodeResultIsFailure(result: SendEmailVerificationCodeResult): boolean {
    return result.type === 'failure'
}