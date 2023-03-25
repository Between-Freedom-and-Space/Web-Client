import {PostReactionState} from "../../../posts/components/common/types";
import {PostPreviewComment, PostPreviewController} from "../../../posts/components/preview/types";
import {ProfilePost, ProfilePostComment, ProfilePostReactionState} from "../../redux/types";
import {ProfilePostsController} from "./types";

export function getProfilePostReactionState(
    state: ProfilePostReactionState
): PostReactionState {
    switch (state) {
    case ProfilePostReactionState.DISLIKED:
        return PostReactionState.DISLIKED
    case ProfilePostReactionState.LIKED:
        return PostReactionState.LIKED
    case ProfilePostReactionState.NOT_REACTED:
        return PostReactionState.NOT_REACTED
    }
    return PostReactionState.NOT_REACTED
}

export function mapCommentsToPostPreviewComments(
    comments: Array<ProfilePostComment>,
    controller?: ProfilePostsController
): Array<PostPreviewComment> {
    return comments.map((comment) => (
        {
            id: comment.id,
            nickname: comment.nickname,
            commentText: comment.commentText,
            lastModifiedDate: comment.createdAt,
            controller: {
                onCommentTextClicked() {
                    controller?.onPostCommentTextClicked(comment.id)
                },
                onIconClicked() {
                    controller?.onPostCommentAuthorClicked(comment.id)
                },
                onNicknameClicked() {
                    controller?.onPostCommentAuthorClicked(comment.id)
                },
                onDislikeClicked() {
                    console.log(`Comment(${comment.id}) dislike clicked`)
                },
                onLikeClicked() {
                    console.log(`Comment(${comment.id}) like clicked`)
                },
            }
        }
    ))
}

export function getPostPreviewController(
    targetPost: ProfilePost,
    controller?: ProfilePostsController
): PostPreviewController {
    return {
        onFollowButtonClicked() {
            console.log('Follow button clicked')
        },
        onLikeClicked() {
            controller?.onPostLikeClicked(targetPost.postId)
        },
        onCommentClicked() {
            controller?.onPostCommentClicked(targetPost.postId)
        },
        onDislikeClicked() {
            controller?.onPostDislikeClicked(targetPost.postId)
        },
        onNicknameClicked() {
            controller?.onPostAuthorClicked(targetPost.postId)
        },
        onPostTextClicked() {
            controller?.onPostTextClicked(targetPost.postId)
        },
        onProfileIconClicked() {
            controller?.onPostAuthorClicked(targetPost.postId)
        }
    }
}