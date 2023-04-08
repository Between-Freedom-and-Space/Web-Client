import React from "react";
import styles from './search-selector-tab.module.scss'

interface Props {
    title: string
    count: number
    includeBottomBorder: boolean
}

function SearchSelectorTab({
    title,
    count,
    includeBottomBorder,
}: Props) {
    return (
        <div className={styles.topContainer}>
            <div className={styles.title}>{title}</div>

        </div>
    )
}

export default SearchSelectorTab