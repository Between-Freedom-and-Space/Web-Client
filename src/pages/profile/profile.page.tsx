import React from 'react'

import Page from '../../apps/page/page'

import { useParams } from 'react-router-dom'
import MarkDownPresenter from "../../apps/mark-down/presenter/mark-down.presenter";

import styles from "./profile-page.module.scss"

function ProfilePage () {
    const { uid } = useParams()
    const source = "## Hello world \n * type1"
    return (
        <Page>
            <div className={styles.container}>
                <div> Profile id {uid} </div>
                <div className={styles.presenter}>
                    <MarkDownPresenter  sources={source} />
                </div>
            </div>
        </Page>
    )
}

export default ProfilePage
