import React from "react";
import styles from './profile-information-follow-controls.module.scss'

import config from './assets/config.json'
import Button from "../../../../../common/components/ui-kit/button/button";
import {FollowControlsController, FollowControlsState} from "./types";
import {getFollowButtonState, getFollowButtonType} from "./helpers";

interface Props {
    state: FollowControlsState
    isFollowLoading: boolean
    controller?: FollowControlsController
}

function ProfileInformationFollowControls({
    state,
    isFollowLoading,
    controller,
}: Props) {
    const buttonTitle = state === FollowControlsState.USER_IS_NOT_FOLLOWING
        ? config.follow.title : config.unfollow.title

    const followButtonClickHandler = () => {
        controller?.onFollowButtonClicked()
    }

    return (
        <div className={styles.topContainer}>
            <Button
                type={getFollowButtonType(state)}
                state={getFollowButtonState(isFollowLoading)}
                onClick={followButtonClickHandler}
            >{buttonTitle}</Button>
        </div>
    )
}

export default ProfileInformationFollowControls