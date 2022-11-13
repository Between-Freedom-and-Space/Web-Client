import SignIn from "../../apps/auth/components/sign-in/sign-in"
import Page from "../../apps/page/page"
import { HeaderMode } from "../../common/components/header/types"

function AuthenticatePage() {
    return (
        <Page>
            <SignIn />
        </Page>
    )
}

export default AuthenticatePage