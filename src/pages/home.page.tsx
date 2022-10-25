import React from 'react'
import Page from "../apps/page/page";

function HomePage() {
    const stubs = Array.from<any>({length: 150})
    return (
        <Page>
            {stubs.map(() => {
                return <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium ducimus explicabo facere fugiat neque voluptate.
                    Architecto asperiores blanditiis ducimus laboriosam molestiae praesentium quisquam sequi voluptates.
                    Ipsam ipsum odio pariatur sequi.
                </div>
            })}
        </Page>
    )
}

export default HomePage
