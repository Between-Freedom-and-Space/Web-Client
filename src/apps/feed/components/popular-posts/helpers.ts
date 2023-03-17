import {PostSmallController} from "../../../posts/components/small/types";
import {FeedPopularPostsController} from "./types";
import {PopularPost} from "../../redux/types";

export function providePopularPostController(
    targetPost: PopularPost,
    controller?: FeedPopularPostsController,
): PostSmallController {
    return {
        onNameClicked() {
            controller?.onPostAuthorNicknameClicked(targetPost.postId)
        },
        onNicknameClicked() {
            controller?.onPostAuthorNicknameClicked(targetPost.postId)
        },
        onPostTextClicked() {
            controller?.onPostTextClicked(targetPost.postId)
        },
        onProfileIconClicked() {
            controller?.onPostAuthorIconClicked(targetPost.postId)
        },
    }
}