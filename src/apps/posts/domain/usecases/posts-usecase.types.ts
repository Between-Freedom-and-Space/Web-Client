export interface GetPostResult {
    type: 'success' | 'failure'
}

export interface GetPostFailure extends GetPostResult {
    type: 'failure'
    message: string
}

export interface GetPostSuccess extends GetPostResult {
    type: 'success'
    post: Post
}

export interface Post {
    id: number
}