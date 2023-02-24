import React from "react";
import styles from './comment.module.scss'
import config from "./assets/config.json"

import {CommentController} from "./types";

interface Props {
    iconUrl?: string // TODO() Add icon url support
    nickname: string
    commentText: string
    likesCount: string
    dislikesCount: string
    controller?: CommentController
}

function Comment(props: Props) {
    const controller = props.controller

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

    return (
        <div className={styles.commentTopContainer}>
            <div className={styles.iconContainer} onClick={onIconClickHandler}>
                <span className={styles.commentProfileIcon}/>
            </div>
            <div className={styles.commentDataContainer}>
                <div
                    className={styles.commentNickname}
                    onClick={onNicknameClickHandler}
                >
                    {props.nickname}
                </div>
                <div
                    className={styles.commentText}
                    onClick={onTextClickHandler}
                >
                    {props.commentText}
                </div>
                <div className={styles.commentControlsContainer}>

                    <div className={styles.commentLike} onClick={onLikeClickHandler}/>
                    <div className={styles.commentReactionsCount}>{props.likesCount}</div>
                    <div className={styles.commentReactionTitle}>{config.like.title}</div>

                    <div className={styles.commentDislike} onClick={onDislikeClickHandler}/>
                    <div className={styles.commentReactionsCount}>{props.dislikesCount}</div>
                    <div className={styles.commentReactionTitle}>{config.dislike.title}</div>
                </div>
            </div>
        </div>
    )
}

export default Comment