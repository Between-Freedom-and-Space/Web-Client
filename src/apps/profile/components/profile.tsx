import React, {useEffect} from "react";
import styles from './profile.module.scss'
import ProfileInformation from "./profile-information/profile-information";
import ProfilePosts from "./profile-posts/profile-posts";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../config/redux.config";
import {ProfileInformationController} from "./profile-information/types";
import {ProfilePostsController} from "./profile-posts/types";
import {SortField, SortType} from "./profile-posts/posts-controls/types";
import {
    getCreateNewPostRouting,
    getPostRouting, getProfileFollowingRouting,
    getProfileRouting,
    getSettingsRouting
} from "../../../config/routings.config";
import {notificationActions} from "../../../common/services/notifications/redux/slice";
import {profileActions} from "../redux/slices";
import {getProfileInformationType} from "./helpers";
import {followProfileThunk, getProfileInformationThunk, reactPostThunk} from "../redux/reducers";
import {ProfilePostReactionState} from "../redux/types";

function Profile() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const profileState = useAppSelector(rootState => rootState.profile)

    useEffect(() => {
        dispatch(getProfileInformationThunk())
    }, [])

    const profileInformationController: ProfileInformationController = {
        onFollowButtonClicked() {
            dispatch(followProfileThunk({
                profileId: profileState.profileId
            }))
        },
        onFollowersCountClicked() {
            navigate(getProfileFollowingRouting(profileState.profileId))
        },
        onFollowingCountClicked() {
            navigate(getProfileFollowingRouting(profileState.profileId))
        },
        onSaveEditButtonClicked() {
            dispatch(notificationActions.addNotification({
                id: "3",
                type: "info",
                title: "Not supported",
                message: "Sorry, this functionality is not supported yet"
            }))
        },
        onSettingsIconClicked() {
            navigate(getSettingsRouting())
        },
    }
    const profilePostsController: ProfilePostsController = {
        onNewPostClicked() {
            navigate(getCreateNewPostRouting())
        },
        onPostAuthorClicked(authorId: number) {
            navigate(getProfileRouting(authorId))
        },
        onPostCommentAuthorClicked(authorId: number) {
            navigate(getProfileRouting(authorId))
        },
        onPostCommentClicked(postId: number) {
            navigate(getPostRouting(postId))
        },
        onPostCommentTextClicked(authorId: number) {
            navigate(getProfileRouting(authorId))
        },
        onPostDislikeClicked(postId: number) {
            dispatch(reactPostThunk({
                postId: postId,
                reactionState: ProfilePostReactionState.DISLIKED,
            }))
        },
        onPostLikeClicked(postId: number) {
            dispatch(reactPostThunk({
                postId: postId,
                reactionState: ProfilePostReactionState.LIKED,
            }))
        },
        onPostTextClicked(postId: number) {
            navigate(getPostRouting(postId))
        },
        onSortPostsClicked(sortField: SortField, sortType: SortType) {
            dispatch(profileActions.sortPosts({
                field: sortField,
                type: sortType,
            }))
        },
    }

    if (profileState.errorMessage) {
        dispatch(notificationActions.addNotification({
            id: "0",
            title: "Error",
            message: profileState.errorMessage,
            type: 'danger'
        }))
        dispatch(profileActions.errorShown())
    }

    return (
        <div className={styles.topContainer}>
            <ProfileInformation
                type={getProfileInformationType(profileState.isUserProfile)}
                nickname={profileState.profileNickname}
                name={profileState.profileName}
                profileDescription={profileState.profileDescription}
                followersCount={profileState.followersCount}
                followingCount={profileState.followingCount}
                isUserFollowingProfile={profileState.userIsFollowingProfile}
                isSaveLoading={profileState.isSaveLoading}
                isFollowLoading={profileState.isFollowLoading}
                controller={profileInformationController}
            />
            <ProfilePosts
                isUserProfile={profileState.isUserProfile}
                selectedSortField={profileState.selectedSortField}
                selectedSortType={profileState.selectedSortType}
                posts={profileState.posts}
                controller={profilePostsController}
            />
        </div>
    )
}

export default Profile