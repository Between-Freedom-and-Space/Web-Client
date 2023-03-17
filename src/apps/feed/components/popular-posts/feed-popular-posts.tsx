import React from "react";
import styles from './feed-popular-posts.module.scss'

import config from './assets/config.json'
import {PopularPost} from "../../redux/types";
import {FeedPopularPostsController} from "./types";
import PostSmall from "../../../posts/components/small/post-small";
import {providePopularPostController} from "./helpers";

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
            <div className={styles.popularPostsTitle}>{config.title}</div>
            <div className={styles.postsContainer}>
                {popularPosts.map((post) => (
                    <PostSmall
                        profileIconUrl={post.profileIconUrl}
                        nickname={post.nickname}
                        name={post.name}
                        postText={post.postText}
                        controller={providePopularPostController(post, controller)}
                    />
                ))}
            </div>
        </div>
    )
}

export default FeedPopularPosts