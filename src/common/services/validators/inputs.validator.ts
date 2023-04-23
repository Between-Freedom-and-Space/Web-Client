import {injectable} from "inversify";
import {ValidationResult, ValidationResultType} from "./types";

@injectable()
export class InputsValidator {

    private static readonly FORBIDDEN_SYMBOLS: Array<string> = [
        ' ', ',', '.', ';', '/'
    ]

    private static readonly MIN_NICKNAME_LENGTH = 3
    private static readonly MAX_NICKNAME_LENGTH = 20

    private static readonly MIN_NAME_LENGTH = 2
    private static readonly MAX_NAME_LENGTH = 50

    private static readonly MIN_PASSWORD_LENGTH = 6

    private static readonly EMAIL_REGEXP = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    private static readonly MAX_LOCATION_LENGTH = 500

    private static readonly MAX_DESCRIPTION_LENGTH = 600

    private static readonly VERIFICATION_CODE_LENGTH = 36
    private static readonly VERIFIED_CODE_LENGTH = 36

    public validateNickname(nickname: string): ValidationResult {
        for (let i = 0; i < nickname.length; i++) {
            if (InputsValidator.FORBIDDEN_SYMBOLS.includes(nickname[i])) {
                return this.failureResult("Nickname can't contains forbidden symbols")
            }
        }
        if (nickname.length < InputsValidator.MIN_NICKNAME_LENGTH) {
            return this.failureResult(`Nickname can't be less than ${InputsValidator.MIN_NICKNAME_LENGTH}`)
        }
        if (nickname.length > InputsValidator.MAX_NICKNAME_LENGTH) {
            return this.failureResult(`Nickname can't be more than ${InputsValidator.MAX_NICKNAME_LENGTH}`)
        }

        return this.successResult()
    }
    
    public validateName(name: string): ValidationResult {
        for (let i = 0; i < name.length; i++) {
            if (InputsValidator.FORBIDDEN_SYMBOLS.includes(name[i])) {
                return this.failureResult("Name can't contains forbidden symbols")
            }
        }
        if (name.length < InputsValidator.MIN_NAME_LENGTH) {
            return this.failureResult(`Name length can't be less than ${InputsValidator.MIN_NAME_LENGTH}`)
        }
        if (name.length > InputsValidator.MAX_NAME_LENGTH) {
            return this.failureResult(`Name length can't be more than ${InputsValidator.MAX_NAME_LENGTH}`)
        }

        return this.successResult()
    }
    
    public validateProfileDescription(description: string): ValidationResult {
        if (description.trim().length === 0) {
            return this.failureResult("Description can't be blank")
        }
        if (description.length > InputsValidator.MAX_DESCRIPTION_LENGTH) {
            return this.failureResult(
                `Description length can't be more than ${InputsValidator.MAX_DESCRIPTION_LENGTH}`
            )
        }

        return this.successResult()
    }
    
    public validateLocation(location: string): ValidationResult {
        if (location.trim().length === 0) {
            return this.failureResult("Location can't be blank")
        }
        if (location.length > InputsValidator.MAX_LOCATION_LENGTH) {
            return this.failureResult(
                `Location length can't be more than ${InputsValidator.MAX_LOCATION_LENGTH}`
            )
        }

        return this.successResult()
    }
    
    public validateEmail(email: string): ValidationResult {
        if (!InputsValidator.EMAIL_REGEXP.test(email)) {
            return this.failureResult('Invalid email')
        }
        return this.successResult()
    }
    
    public validatePassword(password: string): ValidationResult {
        for (let i = 0; i < password.length; i++) {
            if (InputsValidator.FORBIDDEN_SYMBOLS.includes(password[i])) {
                return this.failureResult('Password contains forbidden symbols')
            }
        }
        if (password.length < InputsValidator.MIN_PASSWORD_LENGTH) {
            return this.failureResult(`Password can't be less than ${InputsValidator.MIN_PASSWORD_LENGTH}`)
        }

        return this.successResult()
    }
    
    public validatePasswordMatches(password: string, repeatPassword: string): ValidationResult {
        if (this.validatePassword(password).type !== ValidationResultType.SUCCESS) {
            return this.validatePassword(password)
        }
        if (this.validatePassword(repeatPassword).type !== ValidationResultType.SUCCESS) {
            return this.validatePassword(repeatPassword)
        }

        if (password !== repeatPassword) {
            return this.failureResult("Passwords do not match")
        }

        return this.successResult()
    }

    public validateVerificationCode(code: string): ValidationResult {
        return this.successResult()
        // if (code.trim().length === 0) {
        //     return this.failureResult('Verification code not set')
        // }
        // if (code.trim().length !== InputsValidator.VERIFICATION_CODE_LENGTH) {
        //     return this.failureResult('Invalid verification code')
        // } else {
        //     return this.successResult()
        // }
    }

    public validateVerifiedCode(code: string): ValidationResult {
        if (code.trim().length === 0) {
            return this.failureResult('Verified code not set')
        }
        if (code.trim().length !== InputsValidator.VERIFIED_CODE_LENGTH) {
            return this.failureResult('Invalid verified code')
        } else {
            return this.successResult()
        }
    }

    // noinspection JSMethodCanBeStatic
    private failureResult(message: string): ValidationResult {
        return {
            message: message,
            type: ValidationResultType.FAILURE
        }
    }

    // noinspection JSMethodCanBeStatic
    private successResult(): ValidationResult {
        return {
            type: ValidationResultType.SUCCESS
        }
    }
}