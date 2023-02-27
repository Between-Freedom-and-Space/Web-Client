import React, {useState} from "react";
import styles from './comment.module.scss'
import config from "./assets/config.json"

import {CommentController, CommentReactionState, ReactionState} from "./types";
import {formatDate, getDislikeState, getLikeState, getReactionStateValue} from "./helpers";

interface Props {
    id: number,
    iconUrl?: string // TODO() Add icon url support
    nickname: string
    commentText: string
    likesCount: number
    dislikesCount: number
    reactionState?: CommentReactionState,
    controller?: CommentController,
    lastModifiedDate: Date
}

function Comment({
    id,
    nickname,
    commentText,
    likesCount,
    dislikesCount,
    reactionState = CommentReactionState.NOT_REACTED,
    controller,
    lastModifiedDate,
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

    const hiddenValue = reactionState === CommentReactionState.HIDDEN ? 'hidden' : 'visible'
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
        <div className={styles.commentTopContainer} data-comment-id={id}>
            <div className={styles.iconContainer} onClick={onIconClickHandler}>
                <span className={styles.commentProfileIcon}/>
            </div>
            <div className={styles.commentDataContainer}>
                <div className={styles.commentNickNameContainer}>
                    <div
                        className={styles.commentNickname}
                        onClick={onNicknameClickHandler}
                    >{nickname}</div>
                    <div className={styles.commentLastModifiedDate}>
                        {formatDate(lastModifiedDate)}
                    </div>
                </div>
                <div
                    className={styles.commentText}
                    onClick={onTextClickHandler}
                >{commentText}</div>
                <div
                    className={styles.commentControlsContainer}
                    data-reaction-visibility={hiddenValue}
                >

                    <div
                        className={styles.commentLike}
                        onClick={onLikeClickHandler}
                        onMouseEnter={handleLikeMouseEnter}
                        onMouseLeave={handleLikeMouseLeave}

                        data-reaction-state={likeStateValue}
                        data-reaction-visibility={hiddenValue}
                    />
                    <div
                        className={styles.commentReactionsCount}
                        onMouseEnter={handleLikeMouseEnter}
                        onMouseLeave={handleLikeMouseLeave}

                        data-reaction-type='like'
                        data-reaction-state={likeStateValue}
                        data-reaction-visibility={hiddenValue}
                    >{likesCount}</div>
                    <div
                        className={styles.commentReactionTitle}
                        onMouseEnter={handleLikeMouseEnter}
                        onMouseLeave={handleLikeMouseLeave}

                        data-reaction-type='like'
                        data-reaction-state={likeStateValue}
                        data-reaction-visibility={hiddenValue}
                    >{config.like.title}</div>

                    <div
                        className={styles.commentDislike}
                        onClick={onDislikeClickHandler}
                        onMouseEnter={handleDislikeMouseEnter}
                        onMouseLeave={handleDislikeMouseLeave}

                        data-reaction-state={dislikeStateValue}
                        data-reaction-visibility={hiddenValue}
                    />
                    <div
                        className={styles.commentReactionsCount}
                        onMouseEnter={handleDislikeMouseEnter}
                        onMouseLeave={handleDislikeMouseLeave}

                        data-reaction-type='dislike'
                        data-reaction-state={dislikeStateValue}
                        data-reaction-visibility={hiddenValue}
                    >{dislikesCount}</div>
                    <div
                        className={styles.commentReactionTitle}
                        onMouseEnter={handleDislikeMouseEnter}
                        onMouseLeave={handleDislikeMouseLeave}

                        data-reaction-type='dislike'
                        data-reaction-state={dislikeStateValue}
                        data-reaction-visibility={hiddenValue}
                    >{config.dislike.title}</div>
                </div>
            </div>
        </div>
    )
}

export default Comment