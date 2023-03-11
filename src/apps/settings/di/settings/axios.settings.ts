import {Container} from "inversify";
import TYPES from "../types";
import {AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig} from "axios";
import {RequestInterceptor} from "../../../../common/api/interceptor";

export function configureAxios(container: Container) {
    const axiosInstance = container.get<AxiosInstance>(TYPES.SettingsAxios)
    const tokenInterceptor = container.get<RequestInterceptor<any>>(TYPES.TokenRequestInterceptor)

    axiosInstance.interceptors.request.use(
        (config: AxiosRequestConfig): InternalAxiosRequestConfig => {
            return tokenInterceptor.beforeRequest(config) as InternalAxiosRequestConfig
        },
        (error: any): any => {
            return tokenInterceptor.onRequestFails(error)
        },
        {
            synchronous: true
        }
    )
}