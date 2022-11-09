import React from 'react'

import config from "../assets/config.json"
import twitterIcon from "./assets/twitter-icon.svg"
import githubIcon from "./assets/github-icon.svg"

import styles from "./landing-links.module.scss"

function LandingLinks() {
    return (
        <div className={styles.container}>
            <p className={styles.linksTitle}>{config.links_title}</p>
            <div className={styles.linksIconContainer}>
                <img className={styles.linkIcon} src={githubIcon} alt='GitHub icon'/>
                <img className={styles.linkIcon} src={twitterIcon} alt='Twitter icon'/>
            </div>
        </div>
    )
}

export default LandingLinks