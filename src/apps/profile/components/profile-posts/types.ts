import {SortField, SortType} from "./posts-controls/types";

export interface ProfilePostsController {

    onPostAuthorClicked(authorId: number): void

    onPostTextClicked(postId: number): void

    onPostLikeClicked(postId: number): void

    onPostDislikeClicked(postId: number): void

    onPostCommentClicked(postId: number): void

    onPostCommentAuthorClicked(authorId: number): void

    onPostCommentTextClicked(authorId: number): void

    onSortPostsClicked(sortField: SortField, sortType: SortType): void

    onNewPostClicked(): void
}