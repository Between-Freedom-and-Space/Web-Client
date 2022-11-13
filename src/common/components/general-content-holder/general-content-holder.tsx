import React, { ReactNode } from 'react'

import styles from './general-content-holder.module.scss'
import { ContentDisplayMode } from './types'

interface Props {
    children?: ReactNode
    displayMode?: ContentDisplayMode
}

function GeneralContentHolder ({ children, displayMode = ContentDisplayMode.FIXED_CONTENT }: Props) {
    return (
        <main className={styles.generalContainer} data-display-mode={displayMode}>
            {children}
        </main>
    )
}

export default GeneralContentHolder
