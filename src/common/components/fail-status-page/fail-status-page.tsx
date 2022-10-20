import { FailStatusPageProps, FailType } from "./types";
import React from 'react';
import style from './fail-status-page.module.scss';

interface FailData {
    readonly code: number
    readonly name: string
    readonly description: string
}

const availableFails = new Map<FailType, FailData>();

availableFails.set(FailType.BadRequest, {
    code: 400,
    name: 'Bad Request',
    description: 'Your client has issued a malformed or illegal request. Thats all we know.'
})
availableFails.set(FailType.Unauthorized, {
    code: 401,
    name: 'Unauthorized',
    description: 'Access to denied due to invalid credentials.'
})
availableFails.set(FailType.Forbidden, {
    code: 403,
    name: 'Forbidden',
    description: 'You don’t have a permission to access on this server.'
})
availableFails.set(FailType.NotFound, {
    code: 404,
    name: 'Not Found',
    description: 'The page you are looking for might have been removed, had its name changed, or temporarily unavaliable.'
})
availableFails.set(FailType.InternalServerError, {
    code: 500,
    name: 'Internal Server Error',
    description: 'The server encountered an internal error or miscognification and was unable to complete your request.'
})
availableFails.set(FailType.NotImplemented, {
    code: 501,
    name: 'Not Implemented',
    description: 'The sever either does not recognize the request method, ot it lacks the ability to fulfill the request.'
})
availableFails.set(FailType.BadGateway, {
    code: 502,
    name: 'Bad Gateway',
    description: 'The web server reported a bad gateway error.'
})
availableFails.set(FailType.ServiceUnavalible, {
    code: 503,
    name: 'Service Unavalible',
    description: 'The service is temproraily unavaliable. Please check back shortly.'
})

function FailStatusPage(props: FailStatusPageProps) {
    let failType = props.failType
    if (!availableFails.has(props.failType)) {
        failType = FailType.BadRequest
    }
    const targetFail = availableFails.get(failType)!
    return (
        <div className={style.container}>
            <div className={style.statusCode}>{targetFail.code}</div>
            <div className={style.statusName}>{targetFail.name}</div>
            <div className={style.statusDescription}>{targetFail.description}</div>
        </div>
    )
}

export default FailStatusPage;