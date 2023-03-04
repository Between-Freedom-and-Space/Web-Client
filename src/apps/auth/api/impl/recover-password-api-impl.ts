import {RecoverPasswordApi} from "../recover-password-api";
import {inject, injectable} from "inversify";
import TYPES from "../../di/types";
import {AxiosInstance} from "axios";

@injectable()
export class RecoverPasswordApiImpl implements RecoverPasswordApi {

    @inject(TYPES.AuthAxiosInstance)
    private axios: AxiosInstance | undefined

}