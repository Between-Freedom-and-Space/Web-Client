import React from "react";
import styles from './post-preview-comments.module.scss'
import {PostPreviewComment} from "../types";
import Comment from "../../../../../common/components/comments/comment";
import {CommentReactionState} from "../../../../../common/components/comments/types";

interface Props {
    comments?: Array<PostPreviewComment>
}

function PostPreviewComments({
    comments = Array.of()
}: Props) {
    const commentPresenter = (comment: PostPreviewComment) => {
        return (
            <Comment
                id={comment.id}
                nickname={comment.nickname}
                commentText={comment.commentText}
                likesCount={0}
                dislikesCount={0}
                lastModifiedDate={comment.lastModifiedDate}
                reactionState={CommentReactionState.HIDDEN}
            />
        )
    }

    return (
        <div className={styles.topContainer}>
            {comments?.map(commentPresenter)}
        </div>
    )
}

export default PostPreviewComments;