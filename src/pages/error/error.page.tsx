import React from 'react'

import Page from '../../apps/page/page'
import FailStatusView from '../../common/components/fail-status-view/fail-status-view'

import { FailType } from '../../common/components/fail-status-view/types'

function ErrorPage () {
  return (
        <Page>
            <FailStatusView failType={FailType.ServiceUnavalible}/>
        </Page>
  )
}

export default ErrorPage
