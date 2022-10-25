import React, {ReactNode} from 'react';

import Header from '../../common/components/header/header';
import Footer from '../../common/components/footer/footer';
import GeneralContentHolder from '../../common/components/general-content-holder/general-content-holder';

import styles from './page.module.css';
import {PageMode} from './types';
import {HeaderMode} from "../../common/components/header/types";

type Props = {
    children?: ReactNode
    mode: PageMode
}

function Page({children, mode}: Props) {
    return (
        <div className={styles.pageContainer}>
            <Header mode={HeaderMode.ONLY_LOGO}/>
            <GeneralContentHolder mode={mode}>
                {children}
            </GeneralContentHolder>
            <Footer/>
        </div>
    );
}

export default Page;
