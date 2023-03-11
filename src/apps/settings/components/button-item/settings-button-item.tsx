import React from "react";
import styles from './settings-button-item.module.scss'
import {ButtonState, ButtonType, SizeType} from "../../../../common/components/ui-kit/button/types";
import Button from "../../../../common/components/ui-kit/button/button";

interface Props {
    title: string
    description: string
    buttonLabel: string
    onButtonClick: () => void
    buttonType?: ButtonType
    buttonState?: ButtonState
    includeBottomBorder?: boolean
    includeTopBorder?: boolean
    includeVerticalBorder?: boolean
    backgroundColorWhite?: boolean
}

function SettingsButtonItem({
    title,
    description,
    buttonLabel,
    onButtonClick,
    buttonType = ButtonType.PRIMARY,
    buttonState = ButtonState.ACTIVE,
    includeBottomBorder = false,
    includeTopBorder = false,
    includeVerticalBorder = false,
    backgroundColorWhite = false,
}: Props) {
    return (
        <div
            className={styles.topContainer}

            data-include-bottom-border={includeBottomBorder}
            data-include-top-border={includeTopBorder}
            data-include-vertical-border={includeVerticalBorder}
            data-background-color-white={backgroundColorWhite}
        >

            <div className={styles.informationContainer}>
                <div className={styles.itemTitle}>{title}</div>
                <div className={styles.itemDescription}>{description}</div>
            </div>

            <div className={styles.buttonWrapper}>
                <Button
                    type={buttonType}
                    state={buttonState}
                    onClick={onButtonClick}
                >{buttonLabel}</Button>
            </div>
        </div>
    )
}

export default SettingsButtonItem