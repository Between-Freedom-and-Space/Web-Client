import React from 'react'
import Page from '../../apps/page/page'
import Button from '../../common/components/ui-kit/button/button'
import { ButtonType } from '../../common/components/ui-kit/button/types'

import styles from './home-page.module.scss'
import PlainInput from "../../common/components/ui-kit/inputs/plain/plain-input";
import PasswordInput from '../../common/components/ui-kit/inputs/password/password-input'
import { PasswordInputState } from '../../common/components/ui-kit/inputs/password/types'
import SearchInput from '../../common/components/ui-kit/inputs/search/search-input'

function HomePage () {
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
                {/*<div className={styles.buttonWrapper}>*/}
                {/*    <Button type={ButtonType.SECONDARY}>*/}
                {/*        Follow*/}
                {/*    </Button>*/}
                {/*</div>*/}
                {/*<div className={styles.buttonWrapper}>*/}
                {/*    <Button type={ButtonType.PRIMARY}>*/}
                {/*        Follow*/}
                {/*    </Button>*/}
                {/*</div>*/}
                {/*<div className={styles.buttonWrapper}>*/}
                {/*    <Button type={ButtonType.PRIMARY}>*/}
                {/*        Sign Up*/}
                {/*    </Button>*/}
                {/*</div>*/}
                <div className={styles.buttonWrapper}>
                    <PlainInput hintText={"Hello World"}/>
                </div>
                <div className={styles.buttonWrapper}>
                    <PasswordInput hintText={"Hello World"} currentState={PasswordInputState.INPUT_IS_VALID}/>
                </div>
                <div className={styles.buttonWrapper}>
                    <PasswordInput hintText={"Hello World"} currentState={PasswordInputState.INPUT_IS_INVALID}/>
                </div>
                <div className={styles.buttonWrapper}>
                    <PasswordInput hintText={"Hello World"} currentState={PasswordInputState.INPUT_IN_PROGRESS}/>
                </div>
                <div className={styles.buttonWrapper}>
                    <SearchInput hintText={"Search or jump to..."}/>
                </div>
            </div>
        </Page>
    )
}

export default HomePage
