import React, { ReactNode } from 'react'

import styles from './general-content-holder.module.scss'

interface Props {
  children?: ReactNode
}

function GeneralContentHolder ({ children }: Props) {
  return (
        <main className={styles.generalContainer}>
          {children}
      </main>
  )
}

export default GeneralContentHolder
