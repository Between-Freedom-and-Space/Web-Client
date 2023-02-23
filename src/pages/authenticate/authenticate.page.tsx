import React from "react";
import Authenticate from "../../apps/auth/components/authenticate/authenticate"
import Page from "../../apps/page/page"
import { ContentDisplayMode } from "../../common/components/general-content-holder/types"

function AuthenticatePage() {
    return (
        <Page contentDisplayMode={ContentDisplayMode.FIT_CONTENT}>
            <Authenticate />
        </Page>
    )
}

export default AuthenticatePage