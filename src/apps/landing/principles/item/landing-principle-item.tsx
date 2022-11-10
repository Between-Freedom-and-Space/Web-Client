import React, { useRef } from 'react'

import arrow from "./assets/arrow.svg"
import arrowActive from "./assets/arrow-active.svg"

import styles from "./landing-principle-item.module.scss"

interface Props {
    title: string
    description: string
}

function LandingPrincipleItem({ title, description }: Props) {
    const iconRef = useRef<HTMLImageElement>(null)
    const onImageHover = () => {
        if (iconRef.current) {
            iconRef.current.src = arrowActive
            iconRef.current.setAttribute('data-icon-state', 'active')
        }
    }
    const onImageUnHover = () => {
        if (iconRef.current) {
            iconRef.current.src = arrow
            iconRef.current.setAttribute('data-icon-state', 'default')
        }
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
                    ref={iconRef}
                    data-icon-state='default'
                />
            </div>
            <div className={styles.description}>{description}</div>
            <div className={styles.bottomLine}/>
        </div>
    )
}

export default LandingPrincipleItem