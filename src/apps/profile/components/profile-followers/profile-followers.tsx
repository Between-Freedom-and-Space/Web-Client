import React, {ReactNode, useEffect} from "react";
import styles from './profile-followers.module.scss'
import config from './assets/config.json'

import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../config/redux.config";
import {getProfileFollowersThunk} from "../../redux/reducers";
import ProfileFollowersTab from "./tab/profile-followers-tab";
import {ProfileFollowersState} from "../../redux/types";
import {profileActions} from "../../redux/slices";
import {InfinitySpin} from "react-loader-spinner";
import {getFollowersIsActive, getFollowingIsActive} from "./helpers";

function ProfileFollowers() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const profileState = useAppSelector(root => root.profile)

    const { profileId } = useParams()

    useEffect(() => {
        dispatch(getProfileFollowersThunk({
            profileId: Number.parseInt(profileId!)
        }))
    }, [])

    const onFollowerTabClickHandler = () => {
        dispatch(profileActions.followersStateChange(ProfileFollowersState.SHOW_FOLLOWERS))
    }
    const onFollowingTabClickHandler = () => {
        dispatch(profileActions.followersStateChange(ProfileFollowersState.SHOW_FOLLOWING))
    }

    let content: ReactNode = null
    if (profileState.isProfileFollowingLoading) {
        content = (<InfinitySpin/>)
    }

    return (
        <div className={styles.topContainer}>
            <div className={styles.tabsContainer}>
                <ProfileFollowersTab
                    title={config.tabs.followers.title}
                    isActive={getFollowersIsActive(profileState)}
                    onClick={onFollowerTabClickHandler}
                />
                <ProfileFollowersTab
                    title={config.tabs.following.title}
                    isActive={getFollowingIsActive(profileState)}
                    onClick={onFollowingTabClickHandler}
                />
            </div>
            <div className={styles.contentContainer}>
                {content}
            </div>
        </div>
    )
}

export default ProfileFollowers