import React from "react";
import styles from './post-preview-data.module.scss'
import {PostFollowingState} from "../../common/types";
import Button from "../../../../../common/components/ui-kit/button/button";
import {ButtonType} from "../../../../../common/components/ui-kit/button/types";
import {getFollowButtonLabel} from "./helpers";
import {PostPreviewController} from "../types";

interface Props {
    profileIconUrl?: string // TODO() Add profile icon support
    nickname: string
    followingState?: PostFollowingState
    postText: string
    controller?: PostPreviewController
}

function PostPreviewData({
    profileIconUrl,
    nickname,
    followingState = PostFollowingState.USER_IS_NOT_FOLLOWING,
    postText,
    controller,
}: Props) {
    const nicknameClickHandler = () => {
        controller?.onNicknameClicked()
    }
    const profileIconClickHandler = () => {
        controller?.onProfileIconClicked()
    }
    const followButtonClickHandler = () => {
        controller?.onFollowButtonClicked()
    }
    const postTextClickHandler = () => {
        controller?.onPostTextClicked()
    }

    return (
        <div className={styles.topContainer}>

            <div className={styles.postAuthorProfileIconContainer}>
                <span className={styles.postAuthorIcon} onClick={profileIconClickHandler}/>
            </div>

            <div className={styles.postDataContainer}>

                <div className={styles.postAuthorNicknameContainer}>
                    <div className={styles.postAuthorNickname} onClick={nicknameClickHandler}>{nickname}</div>
                    <div className={styles.postFollowAuthorButtonWrapper}>
                        <Button type={ButtonType.PRIMARY} onClick={followButtonClickHandler}>
                            {getFollowButtonLabel(followingState)}
                        </Button>
                    </div>
                </div>

                <div className={styles.postText} onClick={postTextClickHandler}>{postText}</div>
            </div>
        </div>
    )
}

export default PostPreviewData