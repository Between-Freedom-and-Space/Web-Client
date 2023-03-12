import React from "react";
import styles from './feed-popular-posts.module.scss'
import {PopularPost} from "../../redux/types";
import {FeedPopularPostsController} from "./types";

interface Props {
    isLoading: boolean
    popularPosts: Array<PopularPost>
    controller?: FeedPopularPostsController
}

function FeedPopularPosts({
    isLoading,
    popularPosts,
    controller,
}: Props) {
    return (
        <div className={styles.topContainer}>

        </div>
    )
}

export default FeedPopularPosts