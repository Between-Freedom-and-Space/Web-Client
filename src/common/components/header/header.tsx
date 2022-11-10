import React, {ReactNode} from 'react'

import {HeaderMode} from './types'
import CompanyLogo from './company-logo/company-logo'

import Button from '../ui-kit/button/button'
import {ButtonType, WidthType} from '../ui-kit/button/types'
import HeaderProfileControls from './profile-controls/header-profile-controls'

import styles from './header.module.scss'
import SearchInput from '../ui-kit/inputs/search/search-input'

interface Props {
  mode: HeaderMode
}

function Header ({ mode }: Props) {
    return (
        <header className={styles.headerContainer}>
            <CompanyLogo/>
            {buildHeaderContent(mode)}
        </header>
    )
}

function buildHeaderContent (mode: HeaderMode): ReactNode {
    switch (mode) {
        case HeaderMode.AUTHORIZED:
            return (
                <div className={styles.authorizedElementsContainer}>
                    <SearchInput/>
                   <HeaderProfileControls/>
                 </div>
            )
         case HeaderMode.NOT_AUTHORIZED:
            return (
                <div className={styles.notAuthorizedElementsContainer}>
                    <div className={styles.searchInputWrapper}>
                        <SearchInput hintText='Search or jump to...'/>
                    </div>
                    <div className={styles.signUpButtonWrapper}>
                        <Button type={ButtonType.PRIMARY} widthType={WidthType.MAX_PERCENT}>Sign up</Button>
                    </div>
                </div>
            )
        case HeaderMode.ONLY_LOGO:
        default:
            return (<br/>)
    }
}

export default Header
