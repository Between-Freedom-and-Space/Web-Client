import {PromisableRequestConfig, PromisableResponse, RequestInterceptor, ResponseInterceptor} from "./interceptor";
import {AxiosRequestConfig, AxiosResponse} from "axios";
import {injectable} from "inversify";

@injectable()
export class LoggingRequestInterceptor implements RequestInterceptor<any> {

    beforeRequest(config: AxiosRequestConfig): PromisableRequestConfig<any> {
        console.debug(config)
        return config
    }

    onRequestFails(error: any): any {
        console.error(error)
    }
}

@injectable()
export class LoggingResponseInterceptor implements ResponseInterceptor<any> {

    onFail(response: any): any {
        console.error(response)
    }

    onSuccess(response: AxiosResponse): PromisableResponse<any> {
        console.debug(response)
        return response
    }
}