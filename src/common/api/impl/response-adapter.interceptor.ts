import {ResponseInterceptor} from "../interceptor";
import {injectable} from "inversify";

@injectable()
export class ResponseAdapterInterceptor implements ResponseInterceptor {

    onFail(response: any): any {

    }

    onSuccess(response: any): any {

    }
}