import React from "react";
import styles from './post-preview.module.scss'

import {PostFollowingState, PostReactionState} from "../common/types";
import {PostPreviewComment, PostPreviewController} from "./types";
import PostPreviewData from "./post-data/post-preview-data";
import PostPreviewReactionControls from "./reaction-controls/post-preview-reaction-controls";
import PostPreviewComments from "./comments/post-preview-comments";

interface Props {
    id: number
    authorProfileIconUrl?: string // TODO() Add profile icon support
    authorNickname: string
    postText: string
    likesCount: number
    dislikesCount: number
    commentsCount: number
    reactionState?: PostReactionState,
    followingState?: PostFollowingState,
    controller?: PostPreviewController,
    comments?: Array<PostPreviewComment>,
}

function PostPreview(props: Props) {
    return (
        <div
            className={styles.topContainer}
            data-post-id={props.id}
        >
            <PostPreviewData
                nickname={props.authorNickname}
                postText={props.postText}
                followingState={props.followingState}
            />
            <PostPreviewReactionControls
                likesCount={props.likesCount}
                dislikesCount={props.dislikesCount}
                commentsCount={props.commentsCount}
                reactionState={props.reactionState}
            />
            <PostPreviewComments
                comments={props.comments}
            />
        </div>
    )
}

export default PostPreview