import classnames from 'classnames';
import React, { ReactNode } from 'react'
import Page from "../../apps/page/page";
import Button from '../../common/components/ui-kit/button/button';
import { ButtonType } from '../../common/components/ui-kit/button/types';

import styles from "./home-page.module.scss";

function HomePage() {
    return (
        <Page>
            <div className={styles.container}>
                <div className={styles.buttonWrapper}>
                    <Button type={ButtonType.PRIMARY}>
                        Primary Button
                    </Button>
                </div>
                <div className={styles.buttonWrapper}>
                    <Button type={ButtonType.SECONDARY}>
                        Secondary Button
                    </Button>
                </div>
                <div className={styles.buttonWrapper}>
                    <Button type={ButtonType.DANGER}>
                        Danger Button
                    </Button>
                </div>
            </div>
        </Page>
    )
}

export default HomePage
