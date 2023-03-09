import React from "react";
import styles from './settings-common-zone.module.scss'
import {CommonZoneController} from "./types";

interface Props {
    newNickname?: string,
    newEmail?: string,
    controller?: CommonZoneController,
}

function SettingsCommonZone({
    newNickname,
    newEmail,
    controller,
}: Props) {
    return (
        <div className={styles.topContainer}>

        </div>
    )
}

export default SettingsCommonZone