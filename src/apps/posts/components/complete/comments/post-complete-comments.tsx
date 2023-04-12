import React from "react";
import styles from './post-complete-comments.module.scss'
import {PostCompleteComment} from "../../../redux/complete-types";
import {PostCompleteCommentController} from "./types";
import Comment from "../../../../../common/components/comments/comment";

interface Props {
    comments: Array<PostCompleteComment>
    controller?: PostCompleteCommentController
}

function PostCompleteComments({
    comments,
    controller,
}: Props) {
    return (
        <div className={styles.topContainer}>
            {comments.map(comment => {
                return (
                    <Comment
                        id={comment.commentId}
                        nickname={comment.authorNickname}
                        commentText={comment.commentText}
                        likesCount={comment.likesCount}
                        dislikesCount={comment.dislikesCount}
                        lastModifiedDate={comment.lastModifiedDate}
                        controller={{
                            onCommentTextClicked() {
                                console.log("Comment text clicked")
                            },
                            onDislikeClicked() {
                                controller?.onCommentDislikeClicked(comment.commentId)
                            },
                            onIconClicked() {
                                controller?.onCommentAuthorClicked(comment.authorId)
                            },
                            onLikeClicked() {
                                controller?.onCommentLikeClicked(comment.commentId)
                            },
                            onNicknameClicked() {
                                controller?.onCommentAuthorClicked(comment.authorId)
                            },
                        }}
                    />
                )
            })}
        </div>
    )
}

export default PostCompleteComments