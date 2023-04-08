import React from "react";
import styles from './badge.module.scss'

interface Props {
    text: string
}

function Badge({
    text,
}: Props) {
    return (
        <div className={styles.topContainer}>
            <div className={styles.text}>{text}</div>
        </div>
    )
}

export default Badge