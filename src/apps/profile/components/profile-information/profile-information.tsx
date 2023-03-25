import React, {ReactNode, useState} from "react";
import styles from './profile-information.module.scss'

import config from './assets/config.json'
import {ProfileInformationController, ProfileInformationType} from "./types";
import ProfileInformationEditControls from "./edit-controls/profile-information-edit-controls";
import {EditControlsController, EditControlsState} from "./edit-controls/types";
import ProfileInformationFollowControls from "./follow-controls/profile-information-follow-controls";
import {getFollowingControlsState} from "./helpers";
import {FollowControlsController} from "./follow-controls/types";

interface Props {
    type: ProfileInformationType,
    profileIconUrl?: string // TODO support profile icon url
    nickname: string,
    name: string,
    profileDescription: string,
    location?: string,
    followersCount: number,
    followingCount: number,
    isUserFollowingProfile: boolean,
    isSaveLoading: boolean
    isFollowLoading: boolean
    controller?: ProfileInformationController,
}

function ProfileInformation({
    type,
    nickname,
    name,
    profileDescription,
    location,
    followersCount,
    followingCount,
    isUserFollowingProfile,
    isSaveLoading,
    isFollowLoading,
    controller,
}: Props) {
    const [editState, setEditState] = useState(EditControlsState.NOT_EDITING)

    const followersCountClickHandler = () => {
        controller?.onFollowersCountClicked()
    }
    const followingCountClickHandler = () => {
        controller?.onFollowingCountClicked()
    }

    const editControlsController: EditControlsController = {
        onEditButtonClicked() {
            setEditState(EditControlsState.EDITING)
        },
        onCancelButtonClicked() {
            setEditState(EditControlsState.NOT_EDITING)
        },
        onSaveButtonClicked() {
            controller?.onSaveEditButtonClicked()
        },
        onSettingsIconClicked() {
            controller?.onSettingsIconClicked()
        },
    }
    const followControlsController: FollowControlsController = {
        onFollowButtonClicked() {
            controller?.onFollowButtonClicked()
        }
    }

    let controls: ReactNode
    switch (type) {
    case ProfileInformationType.MY_PROFILE: {
        controls = <ProfileInformationEditControls
            state={editState}
            isSaveLoading={isSaveLoading}
            controller={editControlsController}
        />
        break
    }
    case ProfileInformationType.STRANGER_PROFILE: {
        controls = <ProfileInformationFollowControls
            state={getFollowingControlsState(isUserFollowingProfile)}
            isFollowLoading={isFollowLoading}
            controller={followControlsController}
        />
    }
    }

    return (
        <div className={styles.topContainer}>

            <div className={styles.profileIconContainer}>
                <span className={styles.profileIcon}/>
            </div>

            <div className={styles.profileInformationContainer}>
                <div className={styles.profileName}>{name}</div>
                <div className={styles.profileNickname}>{nickname}</div>
                <div className={styles.profileDescription}>{profileDescription}</div>
                <div className={styles.profileLocation}>{location}</div>
            </div>

            <div className={styles.profileControlsContainer}>
                {controls}
            </div>

            <div className={styles.profileStatisticsContainer}>
                <div
                    className={styles.profileStatisticTitle}
                    onClick={followersCountClickHandler}
                >{config.followers.title}</div>
                <div
                    className={styles.profileStatisticNumber}
                    onClick={followersCountClickHandler}
                >{followersCount}</div>
                <div
                    className={styles.profileStatisticTitle}
                    onClick={followingCountClickHandler}
                >{config.following.title}</div>
                <div
                    className={styles.profileStatisticNumber}
                    onClick={followingCountClickHandler}
                >{followingCount}</div>
            </div>
        </div>
    )
}

export default ProfileInformation