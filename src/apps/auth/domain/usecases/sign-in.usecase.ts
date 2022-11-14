import { injectable } from "inversify";
import {PerformSignInData, SignInResult} from "./sign-in-usecase.types";

@injectable()
export class SignInUseCase {

    public performSignIn(data: PerformSignInData): SignInResult {
        throw new Error('Not implemented yet')
    }
}
