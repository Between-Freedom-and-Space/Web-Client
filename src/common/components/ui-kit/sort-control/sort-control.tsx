import React, {ReactNode} from "react";
import styles from './sort-control.module.scss'

import arrow from '../assets/arrow_icon.svg'
import {ControlState} from "./types";

interface Props {
    label: string
    icon: ReactNode
    state: ControlState
    onClick?: (currentState: ControlState) => void
}

function SortControl({
    label,
    icon,
    state,
    onClick,
}: Props) {
    const controlState = state === ControlState.NOT_ACTIVE
        ? 'not-selected' : 'selected'

    const controlClickHandler = () => {
        if (onClick) {
            onClick(state)
        }
    }

    return (
        <div
            className={styles.topContainer}
            onClick={controlClickHandler}
            data-control-state={controlState}
        >
            <div className={styles.informationContainer}>
                <div className={styles.iconWrapper}>{icon}</div>
                <div className={styles.label}>{label}</div>
            </div>
            <div className={styles.sortTypeContainer}>
                <img
                    className={styles.sortTypeIcon}
                    src={arrow}
                    alt='Arrow icon'
                    data-sort-type={state}
                />
            </div>
        </div>
    )
}

export default SortControl