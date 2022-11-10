import React, {ReactNode} from 'react'

import Header from '../../common/components/header/header'
import Footer from '../../common/components/footer/footer'
import GeneralContentHolder from '../../common/components/general-content-holder/general-content-holder'

import styles from './page.module.css'
import {HeaderMode} from '../../common/components/header/types'

interface Props {
    children?: ReactNode
    headerMode?: HeaderMode
}

function Page ({ children, headerMode }: Props) {
    return (
        <div className={styles.pageContainer}>
            <Header mode={headerMode || HeaderMode.ONLY_LOGO}/>
            <GeneralContentHolder>
                {children}
            </GeneralContentHolder>
            <Footer/>
        </div>
    )
}

export default Page
