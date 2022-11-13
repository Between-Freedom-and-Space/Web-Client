import { injectable } from "inversify";
import { ValidationResult } from "./types";

@injectable()
export class AuthenticateInputsValidator {

    public validateNickname(nickname: string): ValidationResult {
        throw new Error("Not implemented yet")
    }
    
    public validateName(name: string): ValidationResult {
        throw new Error("Not implemented yet")
    }
    
    public validateProfileDescription(description: string): ValidationResult {
        throw new Error("Not implemented yet")
    }
    
    public validateLocation(description: string): ValidationResult {
        throw new Error("Not implemented yet")
    }
    
    public validateEmail(email: string): ValidationResult {
        throw new Error("Not implemented yet")
    }
    
    public validatePassword(password: string): ValidationResult {
        throw new Error("Not implemented yet")
    }
    
    public validatePasswordMatches(password: string, repeatPassword: string): ValidationResult {
        throw new Error("Not implemented yet")
    }
}