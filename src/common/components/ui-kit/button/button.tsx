import React, {ReactNode} from 'react'
import {ButtonType, SizeType} from './types'

import styles from './button.module.scss'

interface Props {
    type: ButtonType
    widthType?: SizeType
    heightType?: SizeType
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
            data-width-type={props.widthType || SizeType.DEFAULT}
            data-height-type={props.heightType || SizeType.DEFAULT}
        >
            {props.children}
        </button>
    )
}

export default Button
