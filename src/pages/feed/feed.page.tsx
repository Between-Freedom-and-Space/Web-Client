import React from 'react'
import styles from './feed-page.module.scss'

import examplePosts from './assets/example-posts.json'
import Page from "../../apps/page/page";
import PostPreview from "../../apps/posts/components/preview/post-preview";
import {PostFollowingState, PostReactionState} from "../../apps/posts/components/common/types";

// Needed only for preview components functionality. Do not use in production!
function FeedPage() {
    const parsePostReactionState = (rawState: string): PostReactionState => {
        if (rawState === "LIKED") {
            return PostReactionState.LIKED
        }
        if (rawState === "DISLIKED") {
            return PostReactionState.DISLIKED
        }
        return PostReactionState.NOT_REACTED
    }
    const parsePostFollowingState = (rawState: string): PostFollowingState => {
        if (rawState === "USER_IS_FOLLOWING") {
            return PostFollowingState.USER_IS_FOLLOWING
        }
        return PostFollowingState.USER_IS_NOT_FOLLOWING
    }

    const postPreviews = examplePosts.posts.map((examplePost) => {
        return (
            <PostPreview
                id={examplePost.id}
                authorNickname={examplePost.authorNickname}
                postText={examplePost.postText}
                likesCount={examplePost.likesCount}
                dislikesCount={examplePost.dislikesCount}
                commentsCount={examplePost.commentsCount}
                reactionState={parsePostReactionState(examplePost.reactionState)}
                followingState={parsePostFollowingState(examplePost.followingState)}
                comments={examplePost.comments.map((comment => {
                    return {
                        id: comment.id,
                        nickname: comment.nickname,
                        commentText: comment.commentText,
                        lastModifiedDate: new Date()
                    }
                }))}
            />
        )
    })
    return (
        <Page>
            <div className={styles.container}>
                {postPreviews}
            </div>
        </Page>
    )
}

export default FeedPage;