import React from 'react'

import MDEditor from '@uiw/react-md-editor'
import rehypeSanitize from "rehype-sanitize";

import styles from "./mark-down-editor.module.scss"
import { EditorController } from '../types';
import { useLocalStorage } from '../../../common/hooks/useLocalStorage';

interface Props {
    value?: string
    height?: string
    controller?: EditorController
}

function MarkDownEditor({ value, height, controller }: Props) {
    const [state, setState] = useLocalStorage('mark-down', '')

    const markdownOnChangeHandler = (value?: string) => {
        setState(value)
    }

    return (
        <div data-color-mode="light" className={styles.container}>
            <MDEditor
                className={styles.editor}
                previewOptions={{
                    rehypePlugins: [[rehypeSanitize]]
                }}
                autoFocus={true}
                overflow={false}
                value={state}
                height={height || '50vh'}
                onChange={markdownOnChangeHandler}
            />
        </div>
    )
}

export default MarkDownEditor