import React from 'react'
import Landing from '../../apps/landing/landing'
import Page from '../../apps/page/page'
import {HeaderMode} from "../../common/components/header/types";

function AboutPage() {
    return (
        <Page headerMode={HeaderMode.NOT_AUTHORIZED}>
            <Landing/>
        </Page>
    )
}

export default AboutPage