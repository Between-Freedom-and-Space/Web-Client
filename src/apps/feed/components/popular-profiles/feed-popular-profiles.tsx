import React from "react";
import styles from './feed-popular-profiles.module.scss'

import config from './assets/config.json'
import {PopularProfile} from "../../redux/types";
import {FeedPopularProfilesController} from "./types";
import ProfileSmall from "../../../../common/components/profile/small/profile-small";
import {providePopularProfilesController} from "./helpers";

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
            <div className={styles.popularProfilesContainer}>
                {popularProfiles.map((profile) => (
                    <ProfileSmall
                        nickname={profile.nickname}
                        name={profile.name}
                        postsCount={profile.postsCount}
                        followersCount={profile.followersCount}
                        isFollowing={profile.isUserFollowing}
                        isFollowLoading={profile.isFollowingLoading}
                        controller={providePopularProfilesController(profile, controller)}
                    />
                ))}
            </div>
        </div>
    )
}

export default FeedPopularProfiles