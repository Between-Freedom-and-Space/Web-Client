import React, {ReactNode, useEffect} from "react";
import styles from './profile-followers.module.scss'
import config from './assets/config.json'

import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../config/redux.config";
import {followProfileThunk, getProfileFollowersThunk} from "../../redux/reducers";
import ProfileFollowersTab from "./tab/profile-followers-tab";
import {ProfileBaseInformation, ProfileFollowersState} from "../../redux/types";
import {profileActions} from "../../redux/slices";
import {InfinitySpin} from "react-loader-spinner";
import {getFollowersIsActive, getFollowingIsActive} from "./helpers";
import ProfileFollowersEmpty from "./empty/profile-followers-empty";
import ProfileSmall from "../../../../common/components/profile/small/profile-small";
import {getProfileRouting} from "../../../../config/routings.config";

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

    const followersMapper = (profile: ProfileBaseInformation) => {
        return (
            <ProfileSmall
                nickname={profile.nickname}
                name={profile.name}
                postsCount={profile.postsCount}
                followersCount={profile.followersCount}
                isFollowing={profile.isFollowing}
                isFollowLoading={profileState.isProfileFollowingLoading}
                controller={{
                    onNameClicked() {
                        navigate(getProfileRouting(profile.id))
                    },
                    onNicknameClicked() {
                        navigate(getProfileRouting(profile.id))
                    },
                    onPostsCountClicked() {
                        navigate(getProfileRouting(profile.id))
                    },
                    onFollowButtonClicked() {
                        dispatch(followProfileThunk({profileId: profile.id}))
                    },
                    onProfileIconClicked() {
                        navigate(getProfileRouting(profile.id))
                    },
                }}
            />
        )
    }

    let content: ReactNode = null
    if (profileState.isProfileFollowingLoading) {
        content = (<InfinitySpin/>)
    } else {
        if (profileState.profileFollowersState === ProfileFollowersState.SHOW_FOLLOWERS) {
            if (profileState.profileFollowers.length === 0) {
                content = (<ProfileFollowersEmpty state='followers'/>)
            } else {
                content = profileState.profileFollowers.map(followersMapper)
            }
        }
        if (profileState.profileFollowersState === ProfileFollowersState.SHOW_FOLLOWING) {
            if (profileState.profileFollowing.length === 0) {
                content = (<ProfileFollowersEmpty state='following'/>)
            } else {
                content = profileState.profileFollowing.map(followersMapper)
            }
        }
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