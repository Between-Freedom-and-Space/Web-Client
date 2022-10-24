import React from 'react'
import Page from "../apps/page/page";
import { PageMode } from '../apps/page/types';

function HomePage() {
    return (
        <Page mode={PageMode.FILL_FULL}>
            <div> Home Page </div>
        </Page>
    )
}

export default HomePage
