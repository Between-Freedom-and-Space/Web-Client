import React, {ReactNode} from 'react'
import {ButtonState, ButtonType, SizeType} from './types'

import styles from './button.module.scss'

interface Props {
    type: ButtonType
    state?: ButtonState
    widthType?: SizeType
    heightType?: SizeType
    children?: ReactNode
    onClick?: () => void
    onDoubleClick?: () => void
}

function Button ({
    type,
    state = ButtonState.ACTIVE,
    widthType = SizeType.DEFAULT,
    heightType = SizeType.DEFAULT,
    children,
    onClick,
    onDoubleClick,
}: Props) {
    const onClickHandler = () => {
        if (state !== ButtonState.ACTIVE) {
            return
        }
        onClick?.call(onClick)
    }
    const onDoubleClickHandler = () => {
        if (state !== ButtonState.ACTIVE) {
            return
        }
        onDoubleClick?.call(onDoubleClick)
    }

    return (
        <button
            className={styles.button}
            onClick={onClickHandler}
            onDoubleClick={onDoubleClickHandler}

            data-button-type={type}
            data-button-state={state}
            data-width-type={widthType}
            data-height-type={heightType}
        >{children}</button>
    )
}

export default Button
