import React from "react";
import styles from './post-small.module.scss'
import {PostSmallController} from "./types";

interface Props {
    profileIconUrl?: string // TODO() add profile icon support
    nickname: string
    name: string
    postText: string
    controller?: PostSmallController
}

function PostSmall({
    nickname,
    name,
    postText,
    controller
}: Props) {

    const profileIconClickHandler = () => {
        controller?.onProfileIconClicked()
    }
    const profileNicknameClickHandler = () => {
        controller?.onNicknameClicked()
    }
    const profileNameClickHandler = () => {
        controller?.onNameClicked()
    }
    const postTextClickHandler = () => {
        controller?.onPostTextClicked()
    }

    return (
        <div className={styles.topContainer}>

            <div className={styles.profileContainer}>

                <div className={styles.profileIconContainer}>
                    <span
                        className={styles.profileIcon}
                        onClick={profileIconClickHandler}
                    />
                </div>

                <div className={styles.profileInformationContainer}>
                    <div
                        className={styles.profileName}
                        onClick={profileNameClickHandler}
                    >{name}</div>
                    <div
                        className={styles.profileNickname}
                        onClick={profileNicknameClickHandler}
                    >{nickname}</div>
                </div>
            </div>

            <div className={styles.postContainer}>
                <div
                    className={styles.postText}
                    onClick={postTextClickHandler}
                >{postText}</div>
            </div>
        </div>
    )
}

export default PostSmall