import React from 'react'

import styles from "./landing-title.module.scss"
import config from "../assets/config.json"

function LandingTitle() {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <p className={styles.title} data-title-part='first'>
                    {config.title_first_part}
                </p>
                <p className={styles.title} data-title-part='second'>
                    {config.title_second_part}
                </p>
            </div>
            <div className={styles.descriptionContainer}>
                <p className={styles.description}>{config.title_description}</p>
            </div>
        </div>
    )
}

export default LandingTitle