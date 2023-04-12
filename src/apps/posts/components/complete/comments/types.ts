export interface PostCompleteCommentController {

    onCommentAuthorClicked(profileId: number): void

    onCommentLikeClicked(commentId: number): void

    onCommentDislikeClicked(commentId: number): void
}