import React from 'react'

import styles from "./landing-principle-item.module.scss"

interface Props {
    title: string
    description: string
}

function LandingPrincipleItem({ title, description }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <div className={styles.title}>{title}</div>
            </div>
            <div className={styles.description}>{description}</div>
        </div>
    )
}

export default LandingPrincipleItem