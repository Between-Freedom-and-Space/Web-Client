import React from "react";
import styles from './search-selector.module.scss'
import config from './assets/config.json'
import SearchSelectorTab from "./tab/search-selector-tab";
import {ShowingState} from "../../redux/types";
import {getPostsIsActive, getProfilesIsActive} from "./helpers";
import {SearchSelectorController} from "./types";

interface Props {
    postsCount: number
    profilesCount: number
    state: ShowingState
    controller?: SearchSelectorController
}

function SearchSelector({
    postsCount,
    profilesCount,
    state,
    controller
}: Props) {
    const postsTabClickHandler = () => {
        controller?.onTabClicked('posts')
    }
    const profilesTabClickHandler = () => {
        controller?.onTabClicked('profiles')
    }

    return (
        <div className={styles.topContainer}>
            <SearchSelectorTab
                title={config.posts.title}
                count={postsCount}
                includeBottomBorder={true}
                isActive={getPostsIsActive(state)}
                onClick={postsTabClickHandler}
            />
            <SearchSelectorTab
                title={config.profiles.title}
                count={profilesCount}
                includeBottomBorder={false}
                isActive={getProfilesIsActive(state)}
                onClick={profilesTabClickHandler}
            />
        </div>
    )
}

export default SearchSelector