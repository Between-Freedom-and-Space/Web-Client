import React from 'react';

import Page from '../apps/page/page';
import FailStatusView from "../common/components/fail-status-view/fail-status-view";

import {FailType} from "../common/components/fail-status-view/types";

function ErrorPage() {
    if (process.env.NODE_ENV !== 'development') {
        return <FailStatusView failType={FailType.ServiceUnavalible}/>
    }

    return (
        <Page>
            <FailStatusView failType={FailType.ServiceUnavalible}/>
        </Page>
    );
}

export default ErrorPage;
