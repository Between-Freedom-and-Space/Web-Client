import React, {useEffect} from "react";
import styles from './profile-followers.module.scss'

import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../config/redux.config";
import {getProfileFollowersThunk} from "../../redux/reducers";

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

    return (
        <div className={styles.topContainer}>

        </div>
    )
}

export default ProfileFollowers