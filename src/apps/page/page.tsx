import React, {ReactNode} from 'react'
import {Outlet} from "react-router-dom";

import Header from '../../common/components/header/header'
import Footer from '../../common/components/footer/footer'
import GeneralContentHolder from '../../common/components/general-content-holder/general-content-holder'

import styles from './page.module.scss'
import {HeaderMode} from '../../common/components/header/types'
import {BackgroundColor, ContentDisplayMode} from '../../common/components/general-content-holder/types'
import {ReactNotifications} from "react-notifications-component";
import 'react-notifications-component/dist/theme.css'

interface Props {
    headerMode?: HeaderMode
    contentDisplayMode?: ContentDisplayMode
    backgroundColor?: BackgroundColor
}

function Page ({
    headerMode = HeaderMode.ONLY_LOGO,
    contentDisplayMode,
    backgroundColor = BackgroundColor.WHITE,
}: Props) {
    const backgroundColorValue =
        backgroundColor === BackgroundColor.LIGHT_GREY ? 'light-gray' : 'white'

    return (
        <div className={styles.pageContainer} data-background-color={backgroundColorValue}>
            <ReactNotifications />
            <Header mode={headerMode}/>
            <GeneralContentHolder displayMode={contentDisplayMode}>
                <Outlet />
            </GeneralContentHolder>
            <Footer/>
        </div>
    )
}

export default Page
