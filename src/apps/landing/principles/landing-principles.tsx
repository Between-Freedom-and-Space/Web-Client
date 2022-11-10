import React from 'react'
import LandingPrincipleItem from './item/landing-principle-item'
import config from "../assets/config.json"

import styles from "./landing-principles.module.scss"

function LandingPrinciples() {
    const title = config.principles_title

    const firstItemTitle = config.first_principle_title
    const firstItemDescription = config.first_principle_description

    const secondItemTitle = config.second_principle_title
    const secondItemDescription = config.second_principle_description

    const thirdItemTitle = config.third_principle_title
    const thirdItemDescription = config.third_principle_description

    const fourthItemTitle = config.fours_principle_title
    const fourthItemDescription = config.fours_principle_description

    return (
        <div className={styles.globalContainer}>
            <p className={styles.title}>{title}</p>
            <div className={styles.principleItemsContainer}>
                <LandingPrincipleItem title={firstItemTitle} description={firstItemDescription}/>
                <LandingPrincipleItem title={secondItemTitle} description={secondItemDescription}/>
                <LandingPrincipleItem title={thirdItemTitle} description={thirdItemDescription}/>
                <LandingPrincipleItem title={fourthItemTitle} description={fourthItemDescription}/>
            </div>
        </div>
    )
}

export default LandingPrinciples