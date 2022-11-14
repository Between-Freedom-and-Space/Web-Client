import { injectable } from "inversify";
import {PerformSignUpData, SendEmailVerificationCodeData} from "./sign-up-usecase.types";
import {SignInResult} from "./sign-in-usecase.types";

@injectable()
export class SignUpUseCase {

    public sendEmailVerificationCode(data: SendEmailVerificationCodeData): void {

    }

    public performSignUp(data: PerformSignUpData): SignInResult {
        throw new Error('Not implemented yet')
    }
}