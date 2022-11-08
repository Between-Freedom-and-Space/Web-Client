import React from 'react'

import MDEditor from '@uiw/react-md-editor'

import styles from "./mark-down-presenter.module.scss"

interface Props  {
    sources?: string
    withBorder?: boolean
}

function MarkDownPresenter({ sources, withBorder = false } : Props) {
    return (
        <MDEditor.Markdown
            className={styles.presenter}
            source={sources}
        />
    )
}

export default MarkDownPresenter