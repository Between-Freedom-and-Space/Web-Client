export interface RequestInterceptor {

    beforeRequest(request: any): any

    onRequestFails(request: any): any
}

export interface ResponseInterceptor  {

    onSuccess(response: any): any

    onFail(response: any): any
}