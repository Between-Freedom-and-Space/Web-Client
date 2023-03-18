export interface FeedSubscriptionsController {

    onPostFollowButtonClicked(postId: number): void

    onPostAuthorIconClicked(authorId: number): void

    onPostAuthorNicknameClicked(authorId: number): void

    onPostTextClicked(postId: number): void

    onLikeIconClicked(postId: number): void

    onDislikeIconClicked(postId: number): void

    onCommentIconClicked(postId: number): void

    onCommentAuthorIconClicked(authorId: number): void

    onCommentAuthorNicknameClicked(authorId: number): void

    onCommentTextClicked(commentId: number): void
}