import React from "react";
import styles from './settings-common-zone.module.scss'
import {CommonZoneController} from "./types";
import config from "./assets/config.json";
import SettingsButtonItem from "../button-item/settings-button-item";
import {ButtonType} from "../../../../common/components/ui-kit/button/types";
import {getCommonZoneButtonState} from "./helpers";

interface Props {
    newNickname?: string,
    newEmail?: string,
    isNicknameChanging: boolean
    isEmailChanging: boolean
    controller?: CommonZoneController,
}

function SettingsCommonZone({
    newNickname,
    newEmail,
    isNicknameChanging,
    isEmailChanging,
    controller,
}: Props) {
    const changeNicknameClickHandler = () => {
        controller?.onChangeNicknameButtonClicked()
    }
    const changeEmailClickHandler = () => {
        return controller?.onChangeEmailButtonClicked()
    }

    return (
        <div className={styles.topContainer}>
            <div className={styles.zoneTitle}>{config.title}</div>

            <div className={styles.controlsContainer}>
                <SettingsButtonItem
                    title={config.settings.change_account_nickname.title}
                    description={config.settings.change_account_nickname.description}
                    buttonLabel={config.settings.change_account_nickname.button_label}
                    onButtonClick={changeNicknameClickHandler}
                    buttonType={ButtonType.PRIMARY}
                    buttonState={getCommonZoneButtonState(isNicknameChanging)}
                    includeTopBorder={true}
                    includeBottomBorder={true}
                    includeVerticalBorder={true}
                    backgroundColorWhite={true}
                />
                <SettingsButtonItem
                    title={config.settings.change_account_email.title}
                    description={config.settings.change_account_email.description}
                    buttonLabel={config.settings.change_account_email.button_label}
                    onButtonClick={changeEmailClickHandler}
                    buttonType={ButtonType.PRIMARY}
                    buttonState={getCommonZoneButtonState(isEmailChanging)}
                    includeTopBorder={true}
                    includeBottomBorder={true}
                    includeVerticalBorder={true}
                    backgroundColorWhite={true}
                />
            </div>
        </div>
    )
}

export default SettingsCommonZone