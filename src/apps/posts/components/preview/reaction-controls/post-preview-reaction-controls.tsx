import React from "react";
import styles from './post-preview-reaction-controls.module.scss'
import {PostReactionState} from "../../common/types";

interface Props {
    likesCount: number
    dislikesCount: number
    commentsCount: number
    reactionState?: PostReactionState
}

function PostPreviewReactionControls({
    likesCount,
    dislikesCount,
    commentsCount,
    reactionState = PostReactionState.NOT_REACTED
}: Props) {
    return (
        <div className={styles.topContainer}>

        </div>
    )
}

export default PostPreviewReactionControls