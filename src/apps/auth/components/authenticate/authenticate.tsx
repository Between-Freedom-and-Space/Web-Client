import React from 'react'
import { useState } from 'react'
import { ReactNode } from 'react'
import { useRef } from 'react'
import SignIn from '../sign-in/sign-in'
import SignUp from '../sign-up/sign-up'

import styles from './authenticate.module.scss'
import AuthenticateTabs from './tabs/authenticate-tabs'
import { AuthenticateTabsState } from './tabs/types'

interface Props {
    initState?: AuthenticateTabsState
}

function Authenticate({initState = AuthenticateTabsState.SIGN_IN_SELECTED}: Props) {
    const [tabState, setTabState] = useState(initState)

    const tabStateListener = (newState: AuthenticateTabsState) => {
        setTabState(newState)
    }

    return (
        <div className={styles.container}>
            <div className={styles.tabsWrapper}>
                <AuthenticateTabs initState={initState} onTabChanged={tabStateListener}/>
            </div>
            {
                tabState === AuthenticateTabsState.SIGN_IN_SELECTED
                ? <SignIn />
                : <SignUp />
            }
        </div>
    )
}

export default Authenticate