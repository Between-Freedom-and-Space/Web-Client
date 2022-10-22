import React from 'react';
import FailStatusView from '../common/components/fail-status-view/fail-status-view';
import { FailType } from '../common/components/fail-status-view/types';
import './entry.css';

function Entry() {
  return (
      <FailStatusView failType={FailType.ServiceUnavalible}/>
  );
}

export default Entry;
