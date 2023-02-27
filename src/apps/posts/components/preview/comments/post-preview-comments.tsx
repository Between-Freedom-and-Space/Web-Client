import React from "react";
import styles from './post-preview-comments.module.scss'
import {PostPreviewComment} from "../types";

interface Props {
    comments?: Array<PostPreviewComment>
}

function PostPreviewComments({comments}: Props) {
    return (
        <div
            className={styles.topContainer}
        >

        </div>
    )
}

export default PostPreviewComments;