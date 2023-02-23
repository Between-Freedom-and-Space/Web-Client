import authDependenciesContainer from "../inversify.config";
import {AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from "axios";
import TYPES from "../types";
import {PromisableResponse, RequestInterceptor, ResponseInterceptor} from "../../../../common/api/interceptor";

const container = authDependenciesContainer

const axiosInstance = container.get<AxiosInstance>(TYPES.AuthAxiosInstance)
const authTokenInterceptor = container.get<RequestInterceptor<any>>(TYPES.AuthTokenInterceptor)

const loggingRequestInterceptor = container.get<RequestInterceptor<any>>(TYPES.LoggingRequestInterceptor)
const loggingResponseInterceptor = container.get<ResponseInterceptor<any>>(TYPES.LoggingResponseInterceptor)

axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig): InternalAxiosRequestConfig => {
        return authTokenInterceptor.beforeRequest(config) as InternalAxiosRequestConfig
    },
    (error: any): any => {
        return authTokenInterceptor.onRequestFails(error)
    },
    {
        synchronous: true
    }
)

axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig): InternalAxiosRequestConfig => {
        return loggingRequestInterceptor.beforeRequest(config) as InternalAxiosRequestConfig
    },
    (error: any): any => {
        return loggingRequestInterceptor.onRequestFails(error)
    },
    {
        synchronous: true
    }
)

axiosInstance.interceptors.response.use(
    (config: AxiosResponse): PromisableResponse<any> => {
        return loggingResponseInterceptor.onSuccess(config)
    },
    (error: any): any => {
        return loggingResponseInterceptor.onFail(error)
    },
    {
        synchronous: true
    }
)