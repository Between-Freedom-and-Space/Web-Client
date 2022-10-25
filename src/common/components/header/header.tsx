import React, {ReactNode} from 'react';

import {HeaderMode} from "./types";
import icon from "./assets/favicon.ico";

import styles from './header.module.scss';

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

export default Header;

function buildHeaderContent(mode: HeaderMode): ReactNode {
    const companyName = "Between Freedom and Space"

    switch (mode) {
        case HeaderMode.ONLY_LOGO:
            return (
                <div className={styles.logoContainer}>
                    <img className={styles.companyIcon} src={icon} alt="Company Icon"/>
                    <div className={styles.companyName}>{companyName}</div>
                </div>
            );
        case HeaderMode.AUTHORIZED:
            return (
                <div>

                </div>
            );
        case HeaderMode.NOT_AUTHORIZED:
            return (
                <div>

                </div>
            );
    }
}