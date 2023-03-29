import React from "react";
import styles from './profile-followers.module.scss'

import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../config/redux.config";

function ProfileFollowers() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const profileState = useAppSelector(root => root.profile)

    return (
        <div className={styles.topContainer}>

        </div>
    )
}

export default ProfileFollowers