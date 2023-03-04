import {injectable} from "inversify";
import {PasswordRecoverChangeState} from "../../../components/passwrod-recover/password-change/types";

@injectable()
export class RecoverPasswordUseCase {

    public getPasswordRecoverChangeState(
        newPassword: string,
        repeatedNewPassword: string
    ): PasswordRecoverChangeState {
        if (newPassword.length === 0 && repeatedNewPassword.length === 0) {
            return PasswordRecoverChangeState.IN_PROGRESS
        }
        if (newPassword === repeatedNewPassword) {
            return PasswordRecoverChangeState.PASSWORDS_MATCH
        } else {
            return PasswordRecoverChangeState.PASSWORDS_NOT_MATCH
        }
    }
}