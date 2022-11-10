import React, {ReactNode} from 'react'
import {ButtonType, WidthType} from './types'

import styles from './button.module.scss'

interface Props {
    type: ButtonType
    widthType?: WidthType
    children?: ReactNode
    onClick?: () => void
    onDoubleClick?: () => void
}

function Button (props: Props) {
    return (
        <button
            className={styles.button}
            onClick={props.onClick}
            onDoubleClick={props.onDoubleClick}
            data-type={props.type}
            data-width-type={props.widthType || WidthType.DEFAULT}
        >
            {props.children}
        </button>
    )
}

export default Button
