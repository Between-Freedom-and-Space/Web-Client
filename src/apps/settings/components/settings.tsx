import React, {useEffect} from "react";
import styles from './settings.module.scss'

import SettingsCommonZone from "./common-zone/settings-common-zone";
import SettingsDangerZone from "./danger-zone/settings-danger-zone";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../config/redux.config";
import {notificationActions} from "../../../common/services/notifications/redux/slice";
import {settingsActions} from "../redux/slices";
import {
    changeAccountEmailThunk,
    changeAccountNicknameThunk, changeAccountVisibilityThunk,
    deleteAccountThunk,
    getAccountSettingsThunk
} from "../redux/reducers";
import {CommonZoneController} from "./common-zone/types";
import {DangerZoneController} from "./danger-zone/types";

function Settings() {
    const navigator = useNavigate()
    const dispatch = useAppDispatch()
    const settingsState = useAppSelector((rootState) => rootState.settings)

    useEffect(() => {
        dispatch(getAccountSettingsThunk())
    }, [])

    const commonZoneController: CommonZoneController = {
        onChangeEmailButtonClicked() {
            dispatch(changeAccountEmailThunk())
        },
        onChangeNicknameButtonClicked() {
            dispatch(changeAccountNicknameThunk())
        },
        onNewEmailChanged(newInput: string) {
            dispatch(settingsActions.newNicknameChanged(newInput))
        },
        onNewNicknameChanged(newInput: string) {
            dispatch(settingsActions.newEmailChanged(newInput))
        }
    }
    const dangerZoneController: DangerZoneController = {
        onDeleteAccountClicked() {
            dispatch(deleteAccountThunk())
        },
        onChangeVisibilityClicked() {
            dispatch(changeAccountVisibilityThunk())
        }
    }

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
                newEmail={settingsState.newAccountEmail}
                newNickname={settingsState.newAccountNickname}
                isEmailChanging={settingsState.isEmailChanging}
                isNicknameChanging={settingsState.isNicknameChanging}
                controller={commonZoneController}
            />
            <SettingsDangerZone
                isAccountDeleting={settingsState.isAccountDeleting}
                isAccountVisibilityChanging={settingsState.isAccountVisibilityChanging}
                controller={dangerZoneController}
            />
        </div>
    )
}

export default Settings;