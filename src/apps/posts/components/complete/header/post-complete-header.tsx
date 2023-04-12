import React from "react";
import styles from './post-complete-header.module.scss'
import {PostCompleteHeaderController} from "./types";
import Button from "../../../../../common/components/ui-kit/button/button";
import {ButtonType} from "../../../../../common/components/ui-kit/button/types";
import {getFollowButtonLabel, getFollowButtonState} from "./helpers";

interface Props {
    profileIconUrl?: string
    nickname: string
    name: string
    isUserFollowing: boolean
    isFollowLoading: boolean
    controller?: PostCompleteHeaderController
}

function PostCompleteHeader({
    nickname,
    name,
    isUserFollowing,
    isFollowLoading,
    controller,
}: Props) {
    const followButtonClickHandler = () => {
        controller?.onFollowButtonClicked()
    }
    const iconClickHandler = () => {
        controller?.onAuthorIconClicked()
    }
    const nameClickHandler = () => {
        controller?.onAuthorNameClicked()
    }
    const nicknameClickHandler = () => {
        controller?.onAuthorNicknameClicked()
    }

    return (
        <div className={styles.topContainer}>

            <div className={styles.authorInformationContainer}>

                <div className={styles.authorIconContainer}>
                    <span className={styles.authorProfileIcon} onClick={iconClickHandler}/>
                </div>

                <div className={styles.authorNameContainer}>
                    <div
                        className={styles.authorName}
                        onClick={nameClickHandler}
                    >{name}</div>
                    <div
                        className={styles.authorNickname}
                        onClick={nicknameClickHandler}
                    >{nickname}</div>
                </div>
            </div>

            <div className={styles.followButtonContainer}>
                <Button
                    type={ButtonType.PRIMARY}
                    state={getFollowButtonState(isUserFollowing)}
                    onClick={followButtonClickHandler}
                >{getFollowButtonLabel(isUserFollowing)}</Button>
            </div>
        </div>
    )
}

export default PostCompleteHeader