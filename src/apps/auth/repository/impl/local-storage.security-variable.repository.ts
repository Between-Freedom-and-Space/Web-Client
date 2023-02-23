import {SecurityVariableRepository} from "../security-variable.repository";
import {injectable} from "inversify";

@injectable()
export class LocalStorageSecurityVariableRepository implements SecurityVariableRepository {

    private static readonly SECURITY_VARIABLE_KEY = 'security_variable_key'

    private readonly storage = window.localStorage

    public get(): string | null {
        return this.storage.getItem(LocalStorageSecurityVariableRepository.SECURITY_VARIABLE_KEY)
    }

    public save(securityVariable: string): string {
        this.storage.setItem(LocalStorageSecurityVariableRepository.SECURITY_VARIABLE_KEY, securityVariable)
        return securityVariable;
    }

    public clear(): string | null {
        const securityVariable = this.storage.getItem(LocalStorageSecurityVariableRepository.SECURITY_VARIABLE_KEY)
        this.storage.removeItem(LocalStorageSecurityVariableRepository.SECURITY_VARIABLE_KEY)
        return securityVariable
    }
}