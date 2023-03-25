import React from "react";
import styles from './profile.module.scss'
import ProfileInformation from "./profile-information/profile-information";
import ProfilePosts from "./profile-posts/profile-posts";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../config/redux.config";

function Profile() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const profileState = useAppSelector(rootState => rootState.profile)

    return (
        <div className={styles.topContainer}>
            {/*<ProfileInformation */}
            {/*    type={} */}
            {/*    nickname={} */}
            {/*    name={} */}
            {/*    profileDescription={} */}
            {/*    followersCount={} */}
            {/*    followingCount={} */}
            {/*    isUserFollowingProfile={} */}
            {/*    isSaveLoading={} */}
            {/*    isFollowLoading={}*/}
            {/*/>*/}
            <ProfilePosts/>
        </div>
    )
}

export default Profile