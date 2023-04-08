import {SearchApi} from "../search-api";
import {injectable} from "inversify";
import {parseResponse} from "../../../../common/helpers/api-helper";
import {Response} from "../../../../common/api/types";

@injectable()
export class SearchApiImpl implements SearchApi {

    public async search(): Promise<Response<void>> {
        return parseResponse('')
    }
}