import React from 'react';
import FailStatusPage from '../common/components/fail-status-page/fail-status-page';
import { FailType } from '../common/components/fail-status-page/types';
import './entry.css';

function Entry() {
  return (
      <FailStatusPage failType={FailType.ServiceUnavalible}/>
  );
}

export default Entry;
