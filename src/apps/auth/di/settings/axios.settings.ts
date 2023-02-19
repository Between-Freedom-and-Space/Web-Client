import authDependenciesContainer from "../inversify.config";
import {AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig} from "axios";
import TYPES from "../types";
import {RequestInterceptor} from "../../../../common/api/interceptor";

const container = authDependenciesContainer

const axiosInstance = container.get<AxiosInstance>(TYPES.AuthAxiosInstance)
const authTokenInterceptor = container.get<RequestInterceptor<any>>(TYPES.AuthTokenInterceptor)

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