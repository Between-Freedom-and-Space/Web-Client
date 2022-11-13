import Authenticate from "../../apps/auth/components/authenticate/authenticate"
import Page from "../../apps/page/page"
import { HeaderMode } from "../../common/components/header/types"

function AuthenticatePage() {
    return (
        <Page>
            <Authenticate />
        </Page>
    )
}

export default AuthenticatePage