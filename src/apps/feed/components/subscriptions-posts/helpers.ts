import {FeedPost, FeedPostComment, FeedPostReactionState} from "../../redux/types";
import {PostReactionState} from "../../../posts/components/common/types";
import {PostPreviewComment, PostPreviewController} from "../../../posts/components/preview/types";
import {FeedSubscriptionsController} from "./types";

export function getFeedSubscriptionPostReactionState(
    state: FeedPostReactionState
): PostReactionState {
    switch (state) {
    case FeedPostReactionState.DISLIKED:
        return PostReactionState.DISLIKED
    case FeedPostReactionState.LIKED:
        return PostReactionState.LIKED
    case FeedPostReactionState.NOT_REACTED:
        return PostReactionState.NOT_REACTED
    }
    return PostReactionState.NOT_REACTED
}

export function mapCommentsToPostPreviewComments(
    comments: Array<FeedPostComment>,
    controller?: FeedSubscriptionsController
): Array<PostPreviewComment> {
    return comments.map((comment) => (
        {
            id: comment.id,
            nickname: comment.nickname,
            commentText: comment.commentText,
            lastModifiedDate: comment.createdAt,
            controller: {
                onCommentTextClicked() {
                    controller?.onCommentTextClicked(comment.id)
                },
                onIconClicked() {
                    controller?.onCommentIconClicked(comment.id)
                },
                onNicknameClicked() {
                    controller?.onCommentAuthorNicknameClicked(comment.id)
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
    targetPost: FeedPost,
    controller?: FeedSubscriptionsController
): PostPreviewController {
    return {
        onFollowButtonClicked() {
            controller?.onPostFollowButtonClicked(targetPost.postId)
        },
        onLikeClicked() {
            controller?.onLikeIconClicked(targetPost.postId)
        },
        onCommentClicked() {
            controller?.onCommentIconClicked(targetPost.postId)
        },
        onDislikeClicked() {
            controller?.onDislikeIconClicked(targetPost.postId)
        },
        onNicknameClicked() {
            controller?.onPostAuthorNicknameClicked(targetPost.postId)
        },
        onPostTextClicked() {
            controller?.onPostTextClicked(targetPost.postId)
        },
        onProfileIconClicked() {
            controller?.onPostAuthorIconClicked(targetPost.postId)
        }
    }
}