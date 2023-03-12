import React from "react";
import styles from './feed-subscriptions-posts.module.scss'
import {FeedPost} from "../../redux/types";
import {FeedSubscriptionsController} from "./types";

interface Props {
    isLoading: boolean
    feedPosts: Array<FeedPost>
    controller?: FeedSubscriptionsController
}

function FeedSubscriptionsPosts({
    isLoading,
    feedPosts,
    controller,
}: Props) {
    return (
        <div className={styles.topContainer}>

        </div>
    )
}

export default FeedSubscriptionsPosts