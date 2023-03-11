import React, {useEffect} from "react";
import styles from './settings.module.scss'

import SettingsCommonZone from "./common-zone/settings-common-zone";
import SettingsDangerZone from "./danger-zone/settings-danger-zone";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../config/redux.config";
import {notificationActions} from "../../../common/services/notifications/redux/slice";
import {settingsActions} from "../redux/slices";
import {getAccountSettingsThunk} from "../redux/reducers";

function Settings() {
    const navigator = useNavigate()
    const dispatch = useAppDispatch()
    const settingsState = useAppSelector((rootState) => rootState.settings)

    useEffect(() => {
        dispatch(getAccountSettingsThunk())
    }, [])

    if (settingsState.errorMessage) {
        dispatch(notificationActions.addNotification({
            id: '0',
            title: 'Error',
            message: settingsState.errorMessage,
            type: 'danger',
        }))
        dispatch(settingsActions.errorShown())
    }

    return (
        <div className={styles.topContainer}>
            <SettingsCommonZone
                isEmailChanging={settingsState.isEmailChanging}
                isNicknameChanging={settingsState.isNicknameChanging}
            />
            <SettingsDangerZone
                isAccountDeleting={settingsState.isAccountDeleting}
                isAccountVisibilityChanging={settingsState.isAccountVisibilityChanging}
            />
        </div>
    )
}

export default Settings;