import {AxiosRequestConfig, AxiosResponse} from "axios";

export type PromisableRequestConfig <T> = AxiosRequestConfig<T> | Promise<AxiosRequestConfig<T>>
export type PromisableResponse <T> = AxiosResponse<T> | Promise<AxiosResponse<T>>

export interface RequestInterceptor <R> {

    beforeRequest(config: AxiosRequestConfig<R>): PromisableRequestConfig<R>

    onRequestFails(error: any): any
}

export interface ResponseInterceptor <R> {

    onSuccess(response: AxiosResponse<R>): PromisableResponse<R>

    onFail(response: any): any
}