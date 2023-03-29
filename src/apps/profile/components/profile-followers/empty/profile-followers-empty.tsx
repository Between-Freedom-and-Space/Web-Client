import React from "react";
import styles from './profile-followers-empty.module.scss'

import addProfileIcon from '../../../../../common/components/ui-kit/assets/add_people_icon.svg'
import config from './assets/config.json'

interface Props {
    state: 'followers' | 'following'
}

function ProfileFollowersEmpty({
    state
}: Props) {
    const title = state === 'followers'
        ? config.followers.title : config.following.title
    const description = state === 'followers'
        ? config.followers.description : config.following.description

    return (
        <div className={styles.topContainer}>
            <img className={styles.icon} src={addProfileIcon} alt='Add profile'/>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
        </div>
    )
}

export default ProfileFollowersEmpty