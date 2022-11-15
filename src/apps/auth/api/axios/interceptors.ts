import {inject, injectable} from "inversify";
import {PromisableRequestConfig, RequestInterceptor} from "../../../../common/api/interceptor";
import {TokenRepository} from "../../repository/token.repository";
import TYPES from "../../di/types";
import {AxiosRequestConfig} from "axios";
import {TOKEN_HEADER_NAME} from "../../../../common/constants/headers";

@injectable()
export class AuthTokenInterceptor implements RequestInterceptor<any> {

    @inject(TYPES.TokenRepository)
    private tokensRepository: TokenRepository | undefined

    beforeRequest(config: AxiosRequestConfig<any>): PromisableRequestConfig<any> {
        if (config.headers?.common?.has(TOKEN_HEADER_NAME)) {
            return config
        }
        const tokens = this.tokensRepository!.getTokens()
        if (tokens === null) {
            return config
        }

        config.headers?.common?.set(TOKEN_HEADER_NAME, tokens.accessToken, true)
        return config
    }

    onRequestFails(error: any): any { }

}