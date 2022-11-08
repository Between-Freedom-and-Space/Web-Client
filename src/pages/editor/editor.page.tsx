import React from 'react'
import MarkDownEditor from '../../apps/mark-down/editor/mark-down.editor'
import Page from '../../apps/page/page'

import styles from "./editor-page.module.scss"

function EditorPage () {
    return (
        <Page>
            <div className={styles.container}>
                <MarkDownEditor />
            </div>
        </Page>
    )
}

export default EditorPage