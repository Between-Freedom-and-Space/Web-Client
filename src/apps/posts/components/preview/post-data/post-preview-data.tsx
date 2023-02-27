import React from "react";
import styles from './post-preview-data.module.scss'
import {PostFollowingState} from "../../common/types";

interface Props {
    profileIconUrl?: string // TODO() Add profile icon support
    nickname: string
    followingState?: PostFollowingState
    postText: string
}

function PostPreviewData({
    profileIconUrl,
    nickname,
    followingState = PostFollowingState.USER_IS_NOT_FOLLOWING,
    postText,
}: Props) {
    return (
        <div className={styles.topContainer}>

        </div>
    )
}

export default PostPreviewData