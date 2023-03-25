import {ProfileApi} from "../profile-api";
import {injectable} from "inversify";

@injectable()
export class ProfileApiImpl implements ProfileApi {

    stub() {
        console.log("stub")
    }
}