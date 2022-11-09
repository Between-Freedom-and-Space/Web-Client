import React from 'react'

import styles from "./landing.module.scss"
import LandingLinks from './links/landing-links'
import LandingPrinciples from './principles/landing-principles'
import LandingTitle from './title/landing-title'

function Landing() {
    return (
        <div className={styles.globalContainer}>
            <div className={styles.titleContainer}>
                <LandingTitle/>
            </div>
            <div className={styles.linksContainer}>
                <LandingLinks/>
            </div>
            <div className={styles.principlesContainer}>
                <LandingPrinciples/>
            </div>
        </div>
    )
}

export default Landing