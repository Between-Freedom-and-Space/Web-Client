export interface FeedSubscriptionsController {

    onPostFollowButtonClicked(postId: number): void

    onPostAuthorIconClicked(postId: number): void

    onPostAuthorNicknameClicked(postId: number): void

    onPostTextClicked(postId: number): void

    onLikeIconClicked(postId: number): void

    onDislikeIconClicked(postId: number): void

    onCommentIconClicked(postId: number): void

    onCommentAuthorIconClicked(commentId: number): void

    onCommentAuthorNicknameClicked(commentId: number): void

    onCommentTextClicked(commentId: number): void
}