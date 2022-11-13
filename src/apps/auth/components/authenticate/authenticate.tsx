import React from 'react'
import SignIn from '../sign-in/sign-in'

import styles from './authenticate.module.scss'
import AuthenticateTabs from './tabs/authenticate-tabs'
import { AuthenticateTabsState } from './tabs/types'

interface Props {
    initState?: AuthenticateTabsState
}

function Authenticate({initState = AuthenticateTabsState.SIGN_IN_SELECTED}: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.tabsWrapper}>
                <AuthenticateTabs initState={initState}/>
            </div>
            <SignIn />
        </div>
    )
}

export default Authenticate