import React from "react";

import Page from "../../apps/page/page";
import {HeaderMode} from "../../common/components/header/types";
import {ContentDisplayMode} from "../../common/components/general-content-holder/types";
import PasswordRecoverFlow from "../../apps/auth/components/passwrod-recover/password-recover-flow";

function RecoverPasswordPage() {
    return (
        <Page headerMode={HeaderMode.ONLY_LOGO} contentDisplayMode={ContentDisplayMode.FIT_CONTENT}>
            <PasswordRecoverFlow />
        </Page>
    )
}

export default RecoverPasswordPage