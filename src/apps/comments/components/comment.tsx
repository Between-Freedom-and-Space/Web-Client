import React, {useState} from "react";
import styles from './comment.module.scss'
import config from "./assets/config.json"

import {CommentController, CommentReactionState, ReactionState} from "./types";
import {getDislikeState, getLikeState, getReactionStateValue} from "./helpers";

interface Props {
    iconUrl?: string // TODO() Add icon url support
    nickname: string
    commentText: string
    likesCount: number
    dislikesCount: number
    reactionState?: CommentReactionState,
    controller?: CommentController
}

function Comment({
    nickname,
    commentText,
    likesCount,
    dislikesCount,
    reactionState = CommentReactionState.NOT_REACTED,
    controller,
}: Props) {
    const onIconClickHandler = () => {
        controller?.onIconClicked()
    }
    const onNicknameClickHandler = () => {
        controller?.onNicknameClicked()
    }
    const onTextClickHandler = () => {
        controller?.onCommentTextClicked()
    }
    const onLikeClickHandler = () => {
        controller?.onLikeClicked()
    }
    const onDislikeClickHandler = () => {
        controller?.onDislikeClicked()
    }


    const [likeStateValue, setLikeState] = useState(
        getReactionStateValue(getLikeState(reactionState))
    )
    const [dislikeStateValue, setDislikeState] = useState(
        getReactionStateValue(getDislikeState(reactionState))
    )

    const handleLikeMouseEnter = () => {
        const value = getReactionStateValue(ReactionState.REACTED)
        setLikeState(value)
    }
    const handleLikeMouseLeave = () => {
        const value = getReactionStateValue(getLikeState(reactionState))
        setLikeState(value)
    }
    const handleDislikeMouseEnter = () => {
        const value = getReactionStateValue(ReactionState.REACTED)
        setDislikeState(value)
    }
    const handleDislikeMouseLeave = () => {
        const value = getReactionStateValue(getDislikeState(reactionState))
        setDislikeState(value)
    }

    return (
        <div className={styles.commentTopContainer}>
            <div className={styles.iconContainer} onClick={onIconClickHandler}>
                <span className={styles.commentProfileIcon}/>
            </div>
            <div className={styles.commentDataContainer}>
                <div
                    className={styles.commentNickname}
                    onClick={onNicknameClickHandler}
                >{nickname}</div>
                <div
                    className={styles.commentText}
                    onClick={onTextClickHandler}
                >{commentText}</div>
                <div className={styles.commentControlsContainer}>

                    <div
                        className={styles.commentLike}
                        onClick={onLikeClickHandler}
                        onMouseEnter={handleLikeMouseEnter}
                        onMouseLeave={handleLikeMouseLeave}

                        data-reaction-state={likeStateValue}
                    />
                    <div
                        className={styles.commentReactionsCount}
                        onMouseEnter={handleLikeMouseEnter}
                        onMouseLeave={handleLikeMouseLeave}

                        data-reaction-type='like'
                        data-reaction-state={likeStateValue}
                    >{likesCount}</div>
                    <div
                        className={styles.commentReactionTitle}
                        onMouseEnter={handleLikeMouseEnter}
                        onMouseLeave={handleLikeMouseLeave}

                        data-reaction-type='like'
                        data-reaction-state={likeStateValue}
                    >{config.like.title}</div>

                    <div
                        className={styles.commentDislike}
                        onClick={onDislikeClickHandler}
                        onMouseEnter={handleDislikeMouseEnter}
                        onMouseLeave={handleDislikeMouseLeave}

                        data-reaction-state={dislikeStateValue}
                    />
                    <div
                        className={styles.commentReactionsCount}
                        onMouseEnter={handleDislikeMouseEnter}
                        onMouseLeave={handleDislikeMouseLeave}

                        data-reaction-type='dislike'
                        data-reaction-state={dislikeStateValue}
                    >{dislikesCount}</div>
                    <div
                        className={styles.commentReactionTitle}
                        onMouseEnter={handleDislikeMouseEnter}
                        onMouseLeave={handleDislikeMouseLeave}

                        data-reaction-type='dislike'
                        data-reaction-state={dislikeStateValue}
                    >{config.dislike.title}</div>
                </div>
            </div>
        </div>
    )
}

export default Comment