import {createSlice} from "@reduxjs/toolkit";
import {PostCompleteState} from "./complete-types";
import {
    followProfileThunk,
    getPostThunk,
    onErrorMessageShown,
    onPostIdChanged,
    reactCommentThunk,
    reactPostThunk
} from "./complete-reducers";
import {PostReactionState} from "../components/common/types";
import {CommentReactionState} from "../../../common/components/comments/types";

const postCompleteInitialState: PostCompleteState = {
    authorId: 0,
    authorName: '',
    authorNickname: '',
    postId: 0,
    postTitle: '',
    postText: '',
    postLikesCount: 0,
    postDislikesCount: 0,
    postCommentsCount: 0,
    postReactionState: PostReactionState.NOT_REACTED,
    isUserFollowing: false,
    isFollowLoading: false,
    isLoading: false,
    errorMessage: undefined,
    comments: Array.of()
}

export const postCompleteSlice = createSlice({
    name: 'complete-post',
    initialState: postCompleteInitialState,
    reducers: {
        errorShown: onErrorMessageShown,
        changePostId: onPostIdChanged,
    },
    extraReducers: (builder) => {
        builder.addCase(getPostThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getPostThunk.rejected, (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload
        })
        builder.addCase(getPostThunk.fulfilled, (state, action) => {
            state.isLoading = false
            const post = action.payload.post
            console.log(post)
            state.postId = post.postId
            state.postTitle = post.title
            state.postText = post.text
            state.postLikesCount = post.likesCount
            state.postDislikesCount = post.dislikesCount
            state.postCommentsCount = post.commentsCount
            state.postReactionState = PostReactionState.NOT_REACTED
            state.authorName = post.author.name
            state.authorNickname = post.author.nickname
            state.authorId = post.author.profileId
            state.comments = post.comments.map(comment => {
                return {
                    authorId: comment.authorId,
                    commentId: comment.commentId,
                    authorNickname: "Ferum-bot",
                    commentText: comment.text,
                    lastModifiedDate: comment.updatedDate,
                    commentReactionState: CommentReactionState.NOT_REACTED,
                    likesCount: 2,
                    dislikesCount: 0,
                    isReactLoading: false,
                }
            })
        })

        builder.addCase(reactPostThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(reactPostThunk.rejected, (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload
        })
        builder.addCase(reactPostThunk.fulfilled, (state, action) => {
            state.isLoading = false
        })

        builder.addCase(reactCommentThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(reactCommentThunk.rejected, (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload
        })
        builder.addCase(reactCommentThunk.fulfilled, (state, action) => {
            state.isLoading = false
        })

        builder.addCase(followProfileThunk.pending, (state) => {
            console.log("follow pending")
        })
        builder.addCase(followProfileThunk.rejected, (state, action) => {
            console.log("follow rejected")
        })
        builder.addCase(followProfileThunk.fulfilled, (state, action) => {
            console.log("follow fulfilled")
        })
    }
})

export const postCompleteActions = postCompleteSlice.actions