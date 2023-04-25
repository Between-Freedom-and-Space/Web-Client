import React from "react";
import styles from './post-preview.module.scss'

import {PostFollowingState, PostReactionState} from "../common/types";
import {PostPreviewComment, PostPreviewController} from "./types";
import PostPreviewData from "./post-data/post-preview-data";
import PostReactionControls from "../common/reaction-controls/post-reaction-controls";
import PostPreviewComments from "./comments/post-preview-comments";
import {PostReactionControlsController} from "../common/reaction-controls/types";

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

function PostPreview({
    id,
    authorNickname,
    postText,
    likesCount,
    dislikesCount,
    commentsCount,
    reactionState,
    followingState,
    comments,
    controller,
}: Props) {
    const postReactionController: PostReactionControlsController = {
        onCommentClicked() {
            controller?.onCommentClicked()
        },
        onLikeClicked() {
            controller?.onLikeClicked()
        },
        onDislikeClicked() {
            controller?.onDislikeClicked()
        },
    }

    return (
        <div
            className={styles.topContainer}
            data-post-id={id}
        >
            <PostPreviewData
                nickname={authorNickname}
                postText={postText}
                followingState={followingState}
                controller={controller}
            />
            <PostReactionControls
                likesCount={likesCount}
                dislikesCount={dislikesCount}
                commentsCount={commentsCount}
                reactionState={reactionState}
                controller={postReactionController}
            />
            <PostPreviewComments
                comments={comments}
            />
        </div>
    )
}

export default PostPreview