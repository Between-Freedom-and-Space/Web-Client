import {Response} from "../../../../../common/api/types";

export interface SearchApi {

    search(): Promise<Response<void>>
}