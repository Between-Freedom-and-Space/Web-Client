import React from "react";
import Page from "../../apps/page/page";
import Settings from "../../apps/settings/components/settings";
import {BackgroundColor} from "../../common/components/general-content-holder/types";

function SettingsPage() {
    return (
        <Page backgroundColor={BackgroundColor.LIGHT_GREY}>
            <Settings />
        </Page>
    )
}

export default SettingsPage