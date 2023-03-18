import React from "react";
import styles from './feed-subscriptions-posts.module.scss'

import config from './assets/config.json'
import {FeedPost} from "../../redux/types";
import {FeedSubscriptionsController} from "./types";
import PostPreview from "../../../posts/components/preview/post-preview";
import {PostFollowingState} from "../../../posts/components/common/types";
import {
    getFeedSubscriptionPostReactionState,
    getPostPreviewController,
    mapCommentsToPostPreviewComments
} from "./helpers";

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

            <div className={styles.titleContainer}>
                <div className={styles.titleLabel}>{config.title}</div>
            </div>

            <div className={styles.postsContainer}>
                {feedPosts.map((post) => (
                    <PostPreview
                        id={post.postId}
                        authorNickname={post.nickname}
                        postText={post.postText}
                        likesCount={post.likesCount}
                        dislikesCount={post.dislikesCount}
                        commentsCount={post.commentsCount}
                        followingState={PostFollowingState.USER_IS_FOLLOWING}
                        reactionState={getFeedSubscriptionPostReactionState(post.reactionState)}
                        comments={mapCommentsToPostPreviewComments(post.comments, controller)}
                        controller={getPostPreviewController(post, controller)}
                    />
                ))}
            </div>
        </div>
    )
}

export default FeedSubscriptionsPosts