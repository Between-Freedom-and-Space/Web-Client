import { injectable } from "inversify";
import { RequestInterceptor } from "../../../../common/api/types";

@injectable()
export class AuthTokenInterceptor implements RequestInterceptor {
    
    beforeRequest(request: any) {
        throw new Error("Method not implemented.");
    }
    onRequestFails(request: any) {
        throw new Error("Method not implemented.");
    }
    
}