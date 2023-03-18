import React, {useEffect} from "react";
import styles from './feed.module.scss'
import FeedPopularPosts from "./popular-posts/feed-popular-posts";
import FeedSubscriptionsPosts from "./subscriptions-posts/feed-subscriptions-posts";
import FeedPopularProfiles from "./popular-profiles/feed-popular-profiles";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../config/redux.config";
import {FeedPopularPostsController} from "./popular-posts/types";
import {FeedSubscriptionsController} from "./subscriptions-posts/types";
import {FeedPopularProfilesController} from "./popular-profiles/types";
import {notificationActions} from "../../../common/services/notifications/redux/slice";
import {feedActions} from "../redux/slices";
import {
    followProfileThunk,
    getPopularPostsThunk, getPopularProfilesThunk,
    getProfileSubscriptionsPostsThunk,
    reactPostThunk
} from "../redux/reducers";

function Feed() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const feedState = useAppSelector(rootState => rootState.feed)

    useEffect(() => {
        dispatch(getPopularPostsThunk())
        dispatch(getProfileSubscriptionsPostsThunk())
        dispatch(getPopularProfilesThunk())
    }, [])

    const feedPopularPostsController: FeedPopularPostsController = {
        onPostAuthorNicknameClicked(postId: number) {
            navigate(`/post/${postId}`)
        },
        onPostAuthorIconClicked(postId: number) {
            navigate(`/post/${postId}`)
        },
        onPostTextClicked(postId: number) {
            navigate(`/post/${postId}`)
        }
    }
    const feedSubscriptionsController: FeedSubscriptionsController = {
        onLikeIconClicked(postId: number) {
            dispatch(reactPostThunk({postId: postId, targetReaction: 'like'}))
        },
        onDislikeIconClicked(postId: number) {
            dispatch(reactPostThunk({postId: postId, targetReaction: 'dislike'}))
        },
        onCommentIconClicked(postId: number) {
            navigate(`/post/${postId}`)
        },
        onPostAuthorIconClicked(authorId: number) {
            navigate(`/profile/${authorId}`)
        },
        onPostTextClicked(postId: number) {
            navigate(`/post/${postId}`)
        },
        onPostAuthorNicknameClicked(authorId: number) {
            navigate(`/profile/${authorId}`)
        },
        onCommentAuthorNicknameClicked(authorId: number) {
            navigate(`/profile/${authorId}`)
        },
        onCommentAuthorIconClicked(authorId: number) {
            navigate(`/profile/${authorId}`)
        },
        onPostFollowButtonClicked(postId: number) {},
        onCommentTextClicked(commentId: number) {},
    }
    const feedPopularProfilesController: FeedPopularProfilesController = {
        onProfileFollowButtonClicked(profileId: number) {
            dispatch(followProfileThunk(profileId))
        },
        onProfileIconClicked(profileId: number) {
            navigate(`/profile/${profileId}`)
        },
        onProfileNicknameClicked(profileId: number) {
            navigate(`/profile/${profileId}`)
        }
    }

    if (feedState.errorMessage) {
        dispatch(notificationActions.addNotification({
            id: "0",
            type: 'danger',
            title: 'Error',
            message: feedState.errorMessage
        }))
        dispatch(feedActions.errorShown())
    }

    return (
        <div className={styles.topContainer}>
            <FeedPopularPosts
                isLoading={feedState.popularPostsLoading}
                popularPosts={feedState.popularPosts}
                controller={feedPopularPostsController}
            />
            <FeedSubscriptionsPosts
                isLoading={feedState.subscriptionsPostsLoading}
                feedPosts={feedState.subscriptionsPosts}
                controller={feedSubscriptionsController}
            />
            <FeedPopularProfiles
                isLoading={feedState.popularProfilesLoading}
                popularProfiles={feedState.popularProfiles}
                controller={feedPopularProfilesController}
            />
        </div>
    )
}

export default Feed