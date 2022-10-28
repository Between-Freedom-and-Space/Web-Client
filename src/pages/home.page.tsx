import React, { ReactNode } from 'react'
import Page from "../apps/page/page";

function HomePage() {
    const stubs = new Array<ReactNode>(150).fill(
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium ducimus explicabo facere fugiat neque voluptate.
            Architecto asperiores blanditiis ducimus laboriosam molestiae praesentium quisquam sequi voluptates.
            Ipsam ipsum odio pariatur sequi.
        </div>
    )
    return <Page>{stubs}</Page>
}

export default HomePage
