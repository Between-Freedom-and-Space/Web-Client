import React from "react";
import styles from './feed.module.scss'
import FeedPopularPosts from "./popular-posts/feed-popular-posts";
import FeedSubscriptionsPosts from "./subscriptions-posts/feed-subscriptions-posts";
import FeedPopularProfiles from "./popular-profiles/feed-popular-profiles";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../config/redux.config";

function Feed() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const feedState = useAppSelector(rootState => rootState.feed)

    return (
        <div className={styles.topContainer}>
            <FeedPopularPosts
                isLoading={feedState.popularPostsLoading}
                popularPosts={feedState.popularPosts}
            />
            <FeedSubscriptionsPosts
                isLoading={feedState.subscriptionsPostsLoading}
                feedPosts={feedState.subscriptionsPosts}
            />
            <FeedPopularProfiles
                isLoading={feedState.popularProfilesLoading}
                popularProfiles={feedState.popularProfiles}
            />
        </div>
    )
}

export default Feed