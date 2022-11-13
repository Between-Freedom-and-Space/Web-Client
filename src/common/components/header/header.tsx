import React, {ReactNode} from 'react'
import { useNavigate } from "react-router-dom";

import {HeaderMode} from './types'
import CompanyLogo from './company-logo/company-logo'

import Button from '../ui-kit/button/button'
import {ButtonType, SizeType} from '../ui-kit/button/types'
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
    const navigate = useNavigate()
    const signInClickListener = () => {
        navigate("/authenticate")
    }

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
                    <Button
                        type={ButtonType.PRIMARY}
                        widthType={SizeType.MAX_PERCENT}
                        onClick={signInClickListener}
                    >Sign in</Button>
                </div>
            </div>
        )
    case HeaderMode.ONLY_LOGO:
    default:
        return null
    }
}

export default Header
