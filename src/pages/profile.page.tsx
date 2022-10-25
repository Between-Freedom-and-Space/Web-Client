import React from 'react'

import Page from '../apps/page/page';

import {useParams} from 'react-router-dom';

function ProfilePage() {
    const {uid} = useParams()

    return (
        <Page>
            <div> Profile id {uid} </div>
        </Page>
    );
}

export default ProfilePage;
