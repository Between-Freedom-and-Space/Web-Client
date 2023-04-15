export interface PostEditState {
    readonly postId?: number
    readonly postTitle: string
    readonly postText: string
    readonly type: PostEditType

    readonly isLoading: boolean
    readonly isSaveLoading: boolean
    readonly errorMessage?: string
}

export enum PostEditType {
    NEW_POST,
    EDITING
}