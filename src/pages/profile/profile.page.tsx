import React from 'react'

import Page from '../../apps/page/page'
import Profile from "../../apps/profile/components/profile";
import {HeaderMode} from "../../common/components/header/types";

function ProfilePage () {
    return (
        <Page headerMode={HeaderMode.AUTHORIZED}>
            <Profile />
        </Page>
    )
}

export default ProfilePage
