import React, { ReactNode } from 'react'
import { ButtonType } from './types'

import styles from './button.module.scss'

interface Props {
  type: ButtonType
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
        >
          {props.children}
      </button>
  )
}

export default Button
