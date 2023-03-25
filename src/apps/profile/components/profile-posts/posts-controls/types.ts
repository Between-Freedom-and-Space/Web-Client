export enum SortType {
    ASC,
    DESC
}

export enum SortField {
    DATE,
    LIKES,
    VIEWS
}

export interface PostsSortController {

    onSortPostsClicked(type: SortType, field: SortField): void
}