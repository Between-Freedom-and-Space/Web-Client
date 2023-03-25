import React from "react";
import styles from './posts-controls.module.scss'
import {PostsSortController, SortField} from "./types";

interface Props {
    selectedSortField: SortField
    isUserProfile: boolean
    sortController?: PostsSortController
}

function PostsControls({
    selectedSortField,
    isUserProfile,
    sortController,
}: Props) {
    return (
        <div className={styles.topContainer}>

        </div>
    )
}