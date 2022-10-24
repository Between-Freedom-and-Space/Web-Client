import React, {ReactNode} from 'react';

import Header from '../../common/components/header/header';
import Footer from '../../common/components/footer/footer';
import GeneralContentHolder from '../../common/components/general-content-holder/general-content-holder';

import styles from './page.module.css';

type Props = { children?: ReactNode }

function Page({children}: Props) {
    return (
        <div className={styles.pageContainer}>
            <Header/>
            <GeneralContentHolder>
                {children}
            </GeneralContentHolder>
            <Footer/>
        </div>
    );
}

export default Page;
