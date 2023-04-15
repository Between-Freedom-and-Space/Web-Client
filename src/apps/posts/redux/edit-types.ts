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

export interface UpdatePostData {
    readonly newTitle?: string
    readonly newText?: string
}

export interface CreatePostData {
    readonly title: string
    readonly text: string
}