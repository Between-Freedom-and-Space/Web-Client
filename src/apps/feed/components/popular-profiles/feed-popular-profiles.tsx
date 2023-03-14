import React from "react";
import styles from './feed-popular-profiles.module.scss'

import config from './assets/config.json'
import {PopularProfile} from "../../redux/types";
import {FeedPopularProfilesController} from "./types";

interface Props {
    isLoading: boolean
    popularProfiles: Array<PopularProfile>
    controller?: FeedPopularProfilesController
}

function FeedPopularProfiles({
    isLoading,
    popularProfiles,
    controller
}: Props) {
    return (
        <div className={styles.topContainer}>
            <div className={styles.groupTitle}>{config.title}</div>
        </div>
    )
}

export default FeedPopularProfiles