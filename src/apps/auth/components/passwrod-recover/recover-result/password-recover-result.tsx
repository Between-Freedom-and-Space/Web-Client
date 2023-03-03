import React from "react";
import styles from './password-recover-result.module.scss'

import config from './assets/config.json'
import Button from "../../../../../common/components/ui-kit/button/button";
import {ButtonType, SizeType} from "../../../../../common/components/ui-kit/button/types";

interface Props {
    onBackButtonClicked?: () => void
}

function PasswordRecoverResult({
    onBackButtonClicked
}: Props) {
    const backButtonClickHandler = () => {
        onBackButtonClicked?.call(onBackButtonClicked)
    }

    return (
        <div className={styles.topContainer}>
            <div className={styles.label}>{config.label}</div>
            <div className={styles.description}>{config.description}</div>

            <div className={styles.backButtonWrapper}>
                <Button
                    type={ButtonType.SECONDARY}
                    onClick={backButtonClickHandler}
                    widthType={SizeType.MAX_PERCENT}
                    heightType={SizeType.MAX_PERCENT}
                >{config.back_button}
                </Button>
            </div>
        </div>
    )
}

export default PasswordRecoverResult;