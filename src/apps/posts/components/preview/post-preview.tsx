import React from "react";
import {PostFollowingState, PostReactionState} from "../common/types";
import {PostPreviewComment, PostPreviewController} from "./types";

interface Props {
    id: number
    authorProfileIconUrl?: string // TODO() Add profile icon support
    authorNickname: string
    postText: string
    likesCount: number
    dislikesCount: number
    reactionState?: PostReactionState,
    followingState?: PostFollowingState,
    controller?: PostPreviewController,
    comments?: Array<PostPreviewComment>,
}

function PostPreview({
    id,
    authorProfileIconUrl,
    authorNickname,
    postText,
    likesCount,
    dislikesCount,
    reactionState = PostReactionState.NOT_REACTED,
    followingState = PostFollowingState.USER_IS_NOT_FOLLOWING,
    controller,
    comments = Array.of()
}: Props) {
    return (
        <div data-post-id={id}>

        </div>
    )
}

export default PostPreview