import {SecurityVariableGenerator} from "../security-variable.generator";
import {v4 as uuid} from 'uuid';

export class UuidSecurityVariableGenerator implements SecurityVariableGenerator {

    public generate(): string {
        return uuid();
    }
}