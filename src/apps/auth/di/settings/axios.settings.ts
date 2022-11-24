import authDependenciesContainer from "../inversify.config";
import {AxiosInstance, AxiosRequestConfig} from "axios";
import TYPES from "../types";
import {RequestInterceptor} from "../../../../common/api/interceptor";

const container = authDependenciesContainer

const axiosInstance = container.get<AxiosInstance>(TYPES.AuthAxiosInstance)
const authTokenInterceptor = container.get<RequestInterceptor<any>>(TYPES.AuthTokenInterceptor)

axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig): AxiosRequestConfig => {
        return authTokenInterceptor.beforeRequest(config) as AxiosRequestConfig
    },
    (error: any): any => {
        return authTokenInterceptor.onRequestFails(error)
    },
    {
        synchronous: true
    }
)