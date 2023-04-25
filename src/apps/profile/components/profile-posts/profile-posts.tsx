import React from "react";
import styles from './profile-posts.module.scss'
import {ProfilePostsController} from "./types";
import {ProfilePost} from "../../redux/types";
import ProfilePostsControls from "./posts-controls/profile-posts-controls";
import {PostsControlsController, SortField, SortType} from "./posts-controls/types";
import PostPreview from "../../../posts/components/preview/post-preview";
import {PostFollowingState} from "../../../posts/components/common/types";
import {getPostPreviewController, getProfilePostReactionState, mapCommentsToPostPreviewComments} from "./helpers";

interface Props {
    isUserProfile: boolean
    selectedSortField: SortField,
    selectedSortType: SortType,
    posts: Array<ProfilePost>
    controller?: ProfilePostsController
}

function ProfilePosts({
    isUserProfile,
    selectedSortType,
    selectedSortField,
    posts,
    controller,
}: Props) {
    const postsControlsController: PostsControlsController = {
        onSortPostsClicked(type: SortType, field: SortField) {
            controller?.onSortPostsClicked(field, type)
        },
        onNewPostButtonClicked() {
            controller?.onNewPostClicked()
        },
    }

    return (
        <div className={styles.topContainer}>

            <ProfilePostsControls
                isUserProfile={isUserProfile}
                selectedSortField={selectedSortField}
                selectedSortType={selectedSortType}
                controller={postsControlsController}
            />

            <div className={styles.postsContainer}>
                {posts.map((post) => (
                    <PostPreview
                        key={post.postId}
                        id={post.postId}
                        authorNickname={post.nickname}
                        postText={post.postText}
                        likesCount={post.likesCount}
                        dislikesCount={post.dislikesCount}
                        commentsCount={post.commentsCount}
                        followingState={PostFollowingState.USER_IS_FOLLOWING}
                        reactionState={getProfilePostReactionState(post.reactionState)}
                        comments={mapCommentsToPostPreviewComments(post.comments)}
                        controller={getPostPreviewController(post, controller)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProfilePosts