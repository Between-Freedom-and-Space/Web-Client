import React from "react";
import styles from './comment.module.scss'

import Page from "../../apps/page/page";
import {HeaderMode} from "../../common/components/header/types";
import {ContentDisplayMode} from "../../common/components/general-content-holder/types";
import Comment from "../../apps/comments/components/comment";
import {CommentReactionState} from "../../apps/comments/components/types";

// Just example of comment
function CommentPage() {
    return (
        <Page
            headerMode={HeaderMode.NOT_AUTHORIZED}
            contentDisplayMode={ContentDisplayMode.FIXED_CONTENT}
        >
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
        </Page>
    )
}

export default CommentPage