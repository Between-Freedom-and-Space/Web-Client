import {ProfileSmallController} from "../../../../common/components/profile/small/types";
import {PopularProfile} from "../../redux/types";
import {FeedPopularProfilesController} from "./types";

export function providePopularProfilesController(
    targetProfile: PopularProfile,
    controller?: FeedPopularProfilesController
): ProfileSmallController {
    return {
        onProfileIconClicked() {
            controller?.onProfileIconClicked(targetProfile.profileId)
        },
        onFollowButtonClicked() {
            controller?.onProfileFollowButtonClicked(targetProfile.profileId)
        },
        onNameClicked() {
            controller?.onProfileNicknameClicked(targetProfile.profileId)
        },
        onNicknameClicked() {
            controller?.onProfileNicknameClicked(targetProfile.profileId)
        },
        onPostsCountClicked() {
            controller?.onProfilePostsCountClicked(targetProfile.postsCount)
        }
    }
}