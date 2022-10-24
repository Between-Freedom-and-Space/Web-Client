import React from 'react';

import Page from '../apps/page/page';
import { PageMode } from '../apps/page/types';
import FailStatusView from "../common/components/fail-status-view/fail-status-view";

import {FailType} from "../common/components/fail-status-view/types";

function ErrorPage() {
    return (
        <Page mode={PageMode.FILL_AVAILABLE}>
            <FailStatusView failType={FailType.ServiceUnavalible}/>
        </Page>
    );
}

export default ErrorPage;
