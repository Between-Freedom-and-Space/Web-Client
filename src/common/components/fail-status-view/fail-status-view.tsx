import React from 'react'

import { FailType } from './types'
import allFails from './assets/available-fails.json'

import styles from './fail-status-view.module.scss'

interface Props {
  failType: FailType
}

function FailStatusView (props: Props) {
    let failType = FailType[FailType.BadRequest]
    if (FailType[props.failType]) {
        failType = FailType[props.failType]
    }
    const targetFail = (allFails as any)[failType]
    return (
        <div className={styles.container}>
            <div className={styles.statusCode}>{targetFail.code}</div>
            <div className={styles.statusName}>{targetFail.name}</div>
            <div className={styles.statusDescription}>{targetFail.description}</div>
        </div>
    )
}

export default FailStatusView
