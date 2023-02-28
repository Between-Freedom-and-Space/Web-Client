import React, {useState} from "react";
import styles from './post-preview-reaction-controls.module.scss'

import config from './assets/config.json'
import {PostReactionState} from "../../common/types";
import {PostPreviewController} from "../types";
import {getDislikeState, getLikeState} from "./helpers";

interface Props {
    likesCount: number
    dislikesCount: number
    commentsCount: number
    reactionState?: PostReactionState
    controller?: PostPreviewController
}

function PostPreviewReactionControls({
    likesCount,
    dislikesCount,
    commentsCount,
    reactionState = PostReactionState.NOT_REACTED,
    controller,
}: Props) {
    const [likeState, setLikeState] = useState(getLikeState(reactionState))
    const [dislikeState, setDislikeState] = useState(getDislikeState(reactionState))

    const likesTitle = config.likes.title
    const dislikesTitle = config.dislikes.title
    const commentsTitle = config.comments.title

    const likeClickHandler = () => {
        controller?.onLikeClicked()
    }
    const dislikeClickHandler = () => {
        controller?.onDislikeClicked()
    }
    const commentClickHandler = () => {
        controller?.onCommentClicked()
    }

    const likeMouseEnterHandler = () => {
        setLikeState(getLikeState(PostReactionState.LIKED))
    }
    const likeMouseLeaveHandler = () => {
        setLikeState(getLikeState(reactionState))
    }
    const dislikeMouseEnterHandler = () => {
        setDislikeState(getDislikeState(PostReactionState.DISLIKED))
    }
    const dislikeMouseLeaveHandler = () => {
        setDislikeState(getDislikeState(reactionState))
    }

    return (
        <div className={styles.topContainer}>

            {/*Like controls*/}
            <div
                className={styles.postLike}
                onClick={likeClickHandler}
                onMouseEnter={likeMouseEnterHandler}
                onMouseLeave={likeMouseLeaveHandler}

                data-reaction-state={likeState}
            />
            <div
                className={styles.postReactionCount}
                onMouseEnter={likeMouseEnterHandler}
                onMouseLeave={likeMouseLeaveHandler}

                data-reaction-type='like'
                data-reaction-state={likeState}
            >{likesCount}</div>
            <div
                className={styles.postReactionTitle}
                onMouseEnter={likeMouseEnterHandler}
                onMouseLeave={likeMouseLeaveHandler}

                data-reaction-type='like'
                data-reaction-state={likeState}
            >{likesTitle}</div>

            {/*Dislike controls*/}
            <div
                className={styles.postDislike}
                onClick={dislikeClickHandler}
                onMouseEnter={dislikeMouseEnterHandler}
                onMouseLeave={dislikeMouseLeaveHandler}

                data-reaction-state={dislikeState}
            />
            <div
                className={styles.postReactionCount}
                onMouseEnter={dislikeMouseEnterHandler}
                onMouseLeave={dislikeMouseLeaveHandler}

                data-reaction-type='dislike'
                data-reaction-state={dislikeState}
            >{dislikesCount}</div>
            <div
                className={styles.postReactionTitle}
                onMouseEnter={dislikeMouseEnterHandler}
                onMouseLeave={dislikeMouseLeaveHandler}

                data-reaction-type='dislike'
                data-reaction-state={dislikeState}
            >{dislikesTitle}</div>

            {/*Comments controls*/}
            <div className={styles.postComment} onClick={commentClickHandler}/>
            <div className={styles.postReactionCount}>{commentsCount}</div>
            <div className={styles.postReactionTitle}>{commentsTitle}</div>
        </div>
    )
}

export default PostPreviewReactionControls