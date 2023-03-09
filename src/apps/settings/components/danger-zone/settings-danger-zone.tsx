import React from "react";
import styles from './settings-danger-zone.module.scss'

import config from './assets/config.json'
import {DangerZoneController} from "./types";
import SettingsButtonItem from "../button-item/settings-button-item";
import {ButtonType} from "../../../../common/components/ui-kit/button/types";
import {getDangerZoneButtonState} from "./helpers";

interface Props {
    isAccountVisibilityChanging: boolean
    isAccountDeleting: boolean
    controller?: DangerZoneController
}

function SettingsDangerZone({
    isAccountVisibilityChanging,
    isAccountDeleting,
    controller,
}: Props) {
    const deleteAccountClickHandler = () => {
        controller?.onDeleteAccountClicked()
    }
    const changeVisibilityClickHandler = () => {
        controller?.onChangeVisibilityClicked()
    }

    return (
        <div className={styles.topContainer}>

            <div className={styles.zoneTitle}>{config.title}</div>

            <div className={styles.controlsContainer}>
                <SettingsButtonItem
                    title={config.settings.change_account_visibility.title}
                    description={config.settings.change_account_visibility.description}
                    buttonLabel={config.settings.change_account_visibility.button_label}
                    buttonType={ButtonType.DANGER}
                    buttonState={getDangerZoneButtonState(isAccountVisibilityChanging)}
                    onButtonClick={changeVisibilityClickHandler}/>
                <SettingsButtonItem
                    title={config.settings.delete_account.title}
                    description={config.settings.delete_account.description}
                    buttonLabel={config.settings.delete_account.button_label}
                    buttonType={ButtonType.DANGER}
                    buttonState={getDangerZoneButtonState(isAccountDeleting)}
                    onButtonClick={deleteAccountClickHandler}/>
            </div>
        </div>
    )
}

export default SettingsDangerZone