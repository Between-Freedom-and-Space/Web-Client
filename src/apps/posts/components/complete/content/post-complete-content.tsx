import React from "react";
import styles from './post-complete-content.module.scss'

interface Props {
    title: string
    text: string
}

function PostCompleteContent({
    title,
    text
}: Props) {
    return (
        <div className={styles.topContainer}>
            <div className={styles.postTitle}>{title}</div>
            <div className={styles.postText}>{text}</div>
        </div>
    )
}

export default PostCompleteContent