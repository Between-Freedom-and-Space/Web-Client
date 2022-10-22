import React from 'react';
import {FailStatusPageProps, FailType} from "./types";
import styles from './fail-status-view.module.scss';
import allFails from './assets/available-fails.json'

function FailStatusView(props: FailStatusPageProps) {
    const targetFail = allFails[props.failType] || allFails[FailType.BadRequest]
    return (
        <div className={styles.container}>
            <div className={styles.statusCode}>{targetFail.code}</div>
            <div className={styles.statusName}>{targetFail.name}</div>
            <div className={styles.statusDescription}>{targetFail.description}</div>
        </div>
    )
}

export default FailStatusView;