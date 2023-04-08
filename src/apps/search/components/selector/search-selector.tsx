import React from "react";
import styles from './search-selector.module.scss'
import config from './assets/config.json'
import SearchSelectorTab from "./tab/search-selector-tab";
import {ShowingState} from "../../redux/types";
import {getPostsIsActive, getProfilesIsActive} from "./helpers";

interface Props {
    postsCount: number
    profilesCount: number
    state: ShowingState
}

function SearchSelector({
    postsCount,
    profilesCount,
    state
}: Props) {
    return (
        <div className={styles.topContainer}>
            <SearchSelectorTab
                title={config.posts.title}
                count={postsCount}
                includeBottomBorder={true}
                isActive={getPostsIsActive(state)}
            />
            <SearchSelectorTab
                title={config.profiles.title}
                count={profilesCount}
                includeBottomBorder={false}
                isActive={getProfilesIsActive(state)}
            />
        </div>
    )
}

export default SearchSelector