import React, {ReactNode} from 'react'

import Header from '../../common/components/header/header'
import Footer from '../../common/components/footer/footer'
import GeneralContentHolder from '../../common/components/general-content-holder/general-content-holder'

import styles from './page.module.css'
import {HeaderMode} from '../../common/components/header/types'
import { ContentDisplayMode } from '../../common/components/general-content-holder/types'

interface Props {
    children?: ReactNode
    headerMode?: HeaderMode
    contentDisplayMode?: ContentDisplayMode
}

function Page ({ children, headerMode, contentDisplayMode }: Props) {
    return (
        <div className={styles.pageContainer}>
            <Header mode={headerMode || HeaderMode.ONLY_LOGO}/>
            <GeneralContentHolder displayMode={contentDisplayMode}>
                {children}
            </GeneralContentHolder>
            <Footer/>
        </div>
    )
}

export default Page
