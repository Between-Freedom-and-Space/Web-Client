import React from 'react'

import config from "../assets/config.json"
import links from "./assets/links.json"
import twitterIcon from "./assets/twitter-icon.svg"
import githubIcon from "./assets/github-icon.svg"

import styles from "./landing-links.module.scss"

function LandingLinks() {
    const githubLink = links.github_link
    const twitterLink = links.twitter_link

    const openLink = (link: string): any => {
        window.open(link, '_blank', 'noopener,noreferrer')
    }

    return (
        <div className={styles.container}>
            <p className={styles.linksTitle}>{config.links_title}</p>
            <div className={styles.linksIconContainer}>
                <img
                    className={styles.linkIcon} src={githubIcon}
                    alt='GitHub icon' onClick={openLink(githubLink)}
                />
                <img
                    className={styles.linkIcon} src={twitterIcon}
                    alt='Twitter icon' onClick={openLink(twitterLink)}
                />
            </div>
        </div>
    )
}

export default LandingLinks