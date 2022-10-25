import React, {ReactNode} from 'react';

import {HeaderMode} from "./types";
import CompanyLogo from "./company-logo/company-logo";

import Button from "../ui-kit/button/button";
import {ButtonType} from "../ui-kit/button/types";
import HeaderProfileControls from "./profile-controls/header-profile-controls";

import styles from './header.module.scss';
import SearchInput from "../ui-kit/inputs/search/search-input";

type Props = {
    mode: HeaderMode
}

function Header({mode}: Props) {
    const headerContent = buildHeaderContent(mode)
    return (
        <header className={styles.headerContainer}>
            {headerContent}
        </header>
    );
}

function buildHeaderContent(mode: HeaderMode): ReactNode {
    const logo = <CompanyLogo />
    const search = <SearchInput />
    const signUp = <Button type={ButtonType.PRIMARY} text="Sign Up" onClick={() => {}} />
    const profileControls = <HeaderProfileControls />

    switch (mode) {
        case HeaderMode.ONLY_LOGO:
            return logo;
        case HeaderMode.AUTHORIZED:
            return [logo, search, signUp];
        case HeaderMode.NOT_AUTHORIZED:
            return [logo, search, profileControls]
    }
}

export default Header;