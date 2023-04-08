import React from "react";
import styles from './search-selector-tab.module.scss'
import Badge from "../../../../../common/components/ui-kit/badge/badge";

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
        <div className={styles.topContainer} data-include-bottom-border={includeBottomBorder}>
            <div className={styles.title}>{title}</div>
            <Badge text={count.toString()}/>
        </div>
    )
}

export default SearchSelectorTab