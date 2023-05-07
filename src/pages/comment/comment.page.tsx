import React from "react";
import styles from './comment.module.scss'

import Comment from "../../common/components/comments/comment";
import {CommentReactionState} from "../../common/components/comments/types";

// Just example of comment
function CommentPage() {
    return (
        <div className={styles.container}>
            <Comment
                id={228}
                nickname='Ferum-bot'
                commentText={
                    "Hello world. This is first comment. " +
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                    "Semper sit massa in leo leo aenean laoreet pellentesque aliquam. " +
                    "Suspendisse urna diam faucibus faucibus odio. " +
                    "Consectetur at lectus nec at volutpat morbi sed. " +
                    "Velit sapien sollicitudin tellu"
                }
                likesCount={333}
                dislikesCount={12}
                lastModifiedDate={new Date()}
                reactionState={CommentReactionState.NOT_REACTED}
            />
        </div>
    )
}

export default CommentPage