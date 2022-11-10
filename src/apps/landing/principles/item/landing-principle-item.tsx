import React from 'react'

import arrow from "./assets/arrow.svg"
import arrowActive from "./assets/arrow-active.svg"

import styles from "./landing-principle-item.module.scss"
import {findImageElementInsideLandingLinkItem} from "./util/helpers";

interface Props {
    title: string
    description: string
}

function LandingPrincipleItem({ title, description }: Props) {
    const onImageHover = (event: React.MouseEvent<HTMLDivElement>) => {
        const icon = findImageElementInsideLandingLinkItem(event.currentTarget)
        icon.src = arrowActive
        icon.setAttribute('data-icon-state', 'active')
    }
    const onImageUnHover = (event: React.MouseEvent<HTMLDivElement>) => {
        const icon = findImageElementInsideLandingLinkItem(event.currentTarget)
        icon.src = arrow
        icon.setAttribute('data-icon-state', 'default')
    }

    return (
        <div
            className={styles.container}
            onMouseOver={onImageHover}
            onMouseOut={onImageUnHover}
        >
            <div className={styles.titleContainer}>
                <div className={styles.title}>{title}</div>
                <img
                    src={arrow} alt='Arrow'
                    className={styles.titleIcon}
                    data-icon-state='default'
                />
            </div>
            <div className={styles.description}>{description}</div>
            <div className={styles.bottomLine}/>
        </div>
    )
}

export default LandingPrincipleItem