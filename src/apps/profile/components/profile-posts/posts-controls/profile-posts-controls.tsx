import React, {ReactNode} from "react";
import styles from './profile-posts-controls.module.scss'
import dateIcon from '../../../../../common/components/ui-kit/assets/calendar_icon.svg'
import likeIcon from '../../../../../common/components/ui-kit/assets/like_icon.svg'
import eyeIcon from '../../../../../common/components/ui-kit/assets/eye_icon.svg'
import sortIcon from '../../../../../common/components/ui-kit/assets/sort_icon.svg'

import config from './assets/config.json'
import {PostsControlsController, SortField, SortType} from "./types";
import SortControl from "../../../../../common/components/ui-kit/sort-control/sort-control";
import {getNewSortType, getSortByDateState, getSortByLikesState, getSortByViewsState} from "./helpers";
import {ControlState} from "../../../../../common/components/ui-kit/sort-control/types";
import Button from "../../../../../common/components/ui-kit/button/button";
import {ButtonState, ButtonType} from "../../../../../common/components/ui-kit/button/types";

interface Props {
    selectedSortField?: SortField
    selectedSortType?: SortType
    isUserProfile: boolean
    controller?: PostsControlsController
}

function ProfilePostsControls({
    selectedSortField,
    selectedSortType,
    isUserProfile,
    controller,
}: Props) {

    const newPostClickHandler = () => {
        controller?.onNewPostButtonClicked()
    }
    const sortByDateClickHandler = (currentState: ControlState) => {
        const newSortType = getNewSortType(currentState)
        controller?.onSortPostsClicked(newSortType, SortField.DATE)
    }
    const sortByLikesClickHandler = (currentState: ControlState) => {
        const newSortType = getNewSortType(currentState)
        controller?.onSortPostsClicked(newSortType, SortField.LIKES)
    }
    const sortByViewsClickHandler = (currentState: ControlState) => {
        const newSortType = getNewSortType(currentState)
        controller?.onSortPostsClicked(newSortType, SortField.VIEWS)
    }

    const sortByDateIcon = (<img src={dateIcon} alt='Date icon'/>)
    const sortByLikesIcon = (<img src={likeIcon} alt='Like icon'/>)
    const sortByViewsIcon = (<img src={eyeIcon} alt='Eye icon'/>)

    let newPostButton: ReactNode = null
    if (isUserProfile) {
        newPostButton = (
            <Button
                type={ButtonType.PRIMARY}
                state={ButtonState.ACTIVE}
                onClick={newPostClickHandler}
            >{config.new_post.title}</Button>
        )
    }

    return (
        <div className={styles.topContainer}>

            <div className={styles.sortByContainer}>
                <img src={sortIcon} alt='Sort icon'/>
                <div className={styles.sortByLabel}>{config.sort_by.title}</div>
            </div>

            <SortControl
                label={config.sort_by_date.title}
                icon={sortByDateIcon}
                state={getSortByDateState(selectedSortField, selectedSortType)}
                onClick={sortByDateClickHandler}
            />
            <SortControl
                label={config.sort_by_likes.title}
                icon={sortByLikesIcon}
                state={getSortByLikesState(selectedSortField, selectedSortType)}
                onClick={sortByLikesClickHandler}
            />
            <SortControl
                label={config.sort_by_views.title}
                icon={sortByViewsIcon}
                state={getSortByViewsState(selectedSortField, selectedSortType)}
                onClick={sortByViewsClickHandler}
            />

            {newPostButton}
        </div>
    )
}

export default ProfilePostsControls