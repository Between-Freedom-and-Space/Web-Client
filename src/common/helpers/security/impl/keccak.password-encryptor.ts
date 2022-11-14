import {PasswordEncryptor} from "../password-encryptor";
import {injectable} from "inversify";
import keccak256 from "keccak256";

@injectable()
export class KeccakPasswordEncryptor implements PasswordEncryptor {

    private readonly keccak = keccak256

    encryptPassword(password: string): string {
        return this.keccak(password).toString('hex');
    }
}