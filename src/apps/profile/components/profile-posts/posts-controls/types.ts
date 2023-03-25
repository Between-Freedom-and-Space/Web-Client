export enum SortType {
    ASC,
    DESC
}

export enum SortField {
    DATE,
    LIKES,
    VIEWS
}

export interface PostsControlsController {

    onSortPostsClicked(type: SortType, field: SortField): void

    onNewPostButtonClicked(): void
}