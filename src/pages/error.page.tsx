import React from 'react';

import Page from '../apps/page/page';
import Header from '../common/components/header/header';

import {Link} from 'react-router-dom';

enum ErrorType {
  ClientError,
  ServerError,
}

type ErrorDetails = {
  code: string
  info: string
}

const ErrorDetailsProvider: {
  [key in ErrorType]: ErrorDetails
} = {
  [ErrorType.ClientError]: {
    code: '4XX',
    info: 'local pizda',
  },
  [ErrorType.ServerError]: {
    code: '5XX',
    info: 'total pizda',
  }
}

const ErrorStatusDetails = ({code, info}: ErrorDetails) => (
  <div style={{fontSize: '22px'}}>
    <span>&nbsp;{code}&nbsp;</span>
    <span>&nbsp;{info}&nbsp;</span>
  </div>
)

function ErrorPage() {
  return (
    <Page>
      <ErrorStatusDetails {...ErrorDetailsProvider[ErrorType.ClientError]} />
      <Link to='/'> Return home </Link>
    </Page>
  );
}

export default ErrorPage;
