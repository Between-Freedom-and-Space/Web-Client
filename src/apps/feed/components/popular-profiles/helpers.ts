import {ProfileSmallController} from "../../../../common/components/profile/small/types";
import {PopularProfile} from "../../redux/types";
import {FeedPopularProfilesController} from "./types";

export function providePopularProfilesController(
    targetProfile: PopularProfile,
    controller?: FeedPopularProfilesController
): ProfileSmallController {
    return {
        onProfileIconClicked() {
        },
        onFollowButtonClicked() {
        },
        onNameClicked() {
        },
        onNicknameClicked() {
        },
        onPostsCountClicked() {
        }
    }
}