import React from "react";
import styles from './profile-followers-tab.module.scss'

interface Props {
    title: string
    isActive: boolean
    onClick: () => void
}

function ProfileFollowersTab({
    title,
    isActive,
    onClick
}: Props) {
    return (
        <div
            className={styles.topContainer}
            onClick={onClick}
            data-tab-is-active={isActive}
        >
            <div className={styles.title}>{title}</div>
        </div>
    )
}

export default ProfileFollowersTab