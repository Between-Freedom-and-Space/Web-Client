import React from 'react'

import Page from '../../apps/page/page'

import { useParams } from 'react-router-dom'
import MarkDownPresenter from "../../apps/mark-down/presenter/mark-down.presenter";

import styles from "./profile-page.module.scss"
import Profile from "../../apps/profile/components/profile";

function ProfilePage () {
    return (
        <Page>
            <Profile />
        </Page>
    )
}

export default ProfilePage
