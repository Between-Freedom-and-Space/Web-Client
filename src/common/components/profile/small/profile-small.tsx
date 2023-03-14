import React from "react";
import styles from './profile-small.module.scss'

import {ProfileSmallController} from "./types";
import Button from "../../ui-kit/button/button";
import {getFollowButtonLabel, getFollowButtonState, getFollowButtonType} from "./helpers";

interface Props {
    iconProfileUrl?: string // TODO() add profile icon support
    nickname: string
    name: string
    postsCount: number
    followersCount: number
    isFollowing: boolean
    isFollowLoading: boolean
    controller?: ProfileSmallController
}

function ProfileSmall({
    nickname,
    name,
    postsCount,
    followersCount,
    isFollowing,
    isFollowLoading,
    controller
}: Props) {
    const postsCountString = `${postsCount} posts`
    const followersCountString = `${followersCount} followers`

    const followButtonClickHandler = () => {
        controller?.onFollowButtonClicked()
    }
    const iconClickHandler = () => {
        controller?.onProfileIconClicked()
    }
    const nameClickHandler = () => {
        controller?.onNameClicked()
    }
    const nicknameClickHandler = () => {
        controller?.onNicknameClicked()
    }
    const postsCountClickHandler = () => {
        controller?.onPostsCountClicked()
    }

    return (
        <div className={styles.topContainer}>

            <div className={styles.profileIconContainer}>
                <span className={styles.profileIcon} onClick={iconClickHandler}/>
            </div>

            <div className={styles.profileDataContainer}>

                <div className={styles.profileNicknameContainer}>
                    <div className={styles.profileName} onClick={nameClickHandler}>{name}</div>
                    <div className={styles.profileNickname} onClick={nicknameClickHandler}>{nickname}</div>
                </div>

                <div className={styles.profileInformationContainer}>
                    <div className={styles.profilePostsCount} onClick={postsCountClickHandler}>{postsCountString}</div>
                    <div className={styles.profileFollowersCount}>{followersCountString}</div>
                </div>
            </div>

            <div className={styles.profileFollowButtonWrapper}>
                <Button
                    type={getFollowButtonType(isFollowing)}
                    state={getFollowButtonState(isFollowLoading)}
                    onClick={followButtonClickHandler}
                >{getFollowButtonLabel(isFollowing)}</Button>
            </div>
        </div>
    )
}

export default ProfileSmall