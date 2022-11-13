import React from 'react'
import { AuthenticateTabsState } from './types'
import config from "./assets/config.json"

import styles from "./authenticate-tabs.module.scss"
import { useRef } from 'react'
import { useEffect } from 'react'

interface Props {
    initState: AuthenticateTabsState
    onTabChanged?: (newState: AuthenticateTabsState) => void
}

function AuthenticateTabs({initState, onTabChanged}: Props) {
    const signInTab = useRef<HTMLDivElement>(null)
    const signUpTab = useRef<HTMLDivElement>(null)

    const setCurrentState = (state: AuthenticateTabsState) => {
        const attribute = 'data-tab-active'
        switch (state) {
            case AuthenticateTabsState.SIGN_IN_SELECTED:
                signInTab.current?.setAttribute(attribute, 'true')
                signUpTab.current?.removeAttribute(attribute)
                break
            case AuthenticateTabsState.SIGN_UP_SELECTED:
                signUpTab.current?.setAttribute(attribute, 'true')
                signInTab.current?.removeAttribute(attribute)
                break
        }
    }

    const onTabClickedHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        if (signInTab.current == event.currentTarget) {
            setCurrentState(AuthenticateTabsState.SIGN_IN_SELECTED)
            onTabChanged?.(AuthenticateTabsState.SIGN_IN_SELECTED)
        } else {
            setCurrentState(AuthenticateTabsState.SIGN_UP_SELECTED)
            onTabChanged?.(AuthenticateTabsState.SIGN_UP_SELECTED)
        }
    }

    useEffect(() => setCurrentState(initState), [])

    return (
        <div className={styles.container}>
            <div className={styles.tab} ref={signInTab} onClick={onTabClickedHandler} data-tab-pos='left'>
                {config.sign_in_tab_title}
            </div>
            <div className={styles.tab} ref={signUpTab} onClick={onTabClickedHandler} data-tab-pos='right'>
                {config.sign_up_tab_title}
            </div>
        </div>
    )
}

export default AuthenticateTabs