import React from 'react'

import Page from '../../apps/page/page'
import Profile from "../../apps/profile/components/profile";
import {HeaderMode} from "../../common/components/header/types";
import {BackgroundColor, ContentDisplayMode} from "../../common/components/general-content-holder/types";

function ProfilePage () {
    return (
        <Page
            headerMode={HeaderMode.AUTHORIZED}
            backgroundColor={BackgroundColor.LIGHT_GREY}
            contentDisplayMode={ContentDisplayMode.FIT_CONTENT}
        >
            <Profile />
        </Page>
    )
}

export default ProfilePage
