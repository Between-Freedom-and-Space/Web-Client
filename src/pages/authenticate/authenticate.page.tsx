import SignIn from "../../apps/auth/components/sign-in/sign-in"
import SignUp from "../../apps/auth/components/sign-up/sign-up"
import Page from "../../apps/page/page"
import { HeaderMode } from "../../common/components/header/types"

function AuthenticatePage() {
    return (
        <Page>
            <SignUp />
        </Page>
    )
}

export default AuthenticatePage