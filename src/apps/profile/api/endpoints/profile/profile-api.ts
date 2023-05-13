import {Response} from "../../../../../common/api/types";
import {GetProfileByIdResponse} from "./profile-api.types";

export interface ProfileApi {

    getProfileById(id: number): Promise<Response<GetProfileByIdResponse>>
}