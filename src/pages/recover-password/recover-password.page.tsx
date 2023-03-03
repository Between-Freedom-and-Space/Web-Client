import React from "react";
import styles from './recover-password-page.module.scss'

import Page from "../../apps/page/page";
import {HeaderMode} from "../../common/components/header/types";
import PasswordRecoverEnterEmail
    from "../../apps/auth/components/passwrod-recover/enter-email/password-recover-enter-email";
import {ContentDisplayMode} from "../../common/components/general-content-holder/types";
import PasswordRecoverEnterCode
    from "../../apps/auth/components/passwrod-recover/enter-code/password-recover-enter-code";
import PasswordRecoverResult from "../../apps/auth/components/passwrod-recover/recover-result/password-recover-result";
import PasswordRecoverChange from "../../apps/auth/components/passwrod-recover/password-change/password-recover-change";

function RecoverPasswordPage() {
    return (
        <Page headerMode={HeaderMode.ONLY_LOGO} contentDisplayMode={ContentDisplayMode.FIXED_CONTENT}>
            <div className={styles.container}>
                <PasswordRecoverChange />
            </div>
        </Page>
    )
}

export default RecoverPasswordPage