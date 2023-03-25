import React, {ReactNode} from "react";
import styles from './profile-information-edit-controls.module.scss'

import config from './assets/config.json'
import {EditControlsController, EditControlsState} from "./types";
import Button from "../../../../../common/components/ui-kit/button/button";
import {ButtonState, ButtonType} from "../../../../../common/components/ui-kit/button/types";
import {getSaveButtonState} from "./helpers";

interface Props {
    state: EditControlsState
    isSaveLoading: boolean
    controller?: EditControlsController,
}

function ProfileInformationEditControls({
    state,
    isSaveLoading,
    controller
}: Props) {
    const saveButtonClickHandler = () => {
        controller?.onSaveButtonClicked()
    }
    const cancelButtonClickHandler = () => {
        controller?.onCancelButtonClicked()
    }
    const editButtonClickHandler = () => {
        controller?.onEditButtonClicked()
    }
    const settingsButtonClickHandler = () => {
        controller?.onSettingsIconClicked()
    }

    let buttons: Array<ReactNode> = new Array(0)
    switch (state) {
    case EditControlsState.EDITING: {
        buttons.push(
            <Button
                type={ButtonType.SECONDARY}
                state={getSaveButtonState(isSaveLoading)}
                onClick={saveButtonClickHandler}
            >{config.save.title}</Button>
        )
        buttons.push(
            <Button
                type={ButtonType.SECONDARY}
                state={ButtonState.ACTIVE}
                onClick={cancelButtonClickHandler}
            >{config.cancel.title}</Button>
        )
        break
    }
    case EditControlsState.NOT_EDITING: {
        buttons.push(
            <Button
                type={ButtonType.SECONDARY}
                state={ButtonState.ACTIVE}
                onClick={editButtonClickHandler}
            >{config.edit.title}</Button>
        )
        break
    }
    }

    return (
        <div className={styles.topContainer}>
            <div className={styles.buttonsContainer}>
                {buttons}
            </div>
            <div
                className={styles.settingsIcon}
                onClick={settingsButtonClickHandler}
            />
        </div>
    )
}

export default ProfileInformationEditControls