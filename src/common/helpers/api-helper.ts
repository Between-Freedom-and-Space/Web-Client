import {Error, Response} from "../api/types";

export type ContentParser <T>  = (content: any) => T

export function parseResponse <T> (rawResponse: any, parser?: ContentParser<T>): Response<T> {

    const parseContent = <R> (response: any): T | undefined => {
        const content = response['content']
        if (!content) {
            return undefined
        }
        return parser?.(content)
    }

    const parseError = (response: any): Error | undefined => {
        const error = response['error']
        if (!error) {
            return undefined
        }
        const errorId = error['error_id']
        const message = error['message']
        if (!errorId || !message) {
            return undefined
        }
        return {
            errorId: errorId as number,
            message: message as string
        }
    }

    const statusCode = rawResponse['status_code'] || 503
    const statusMessage = rawResponse['status_message'] || 'Service unavailable'
    const content = parseContent<T>(rawResponse)
    const error = parseError(rawResponse)

    return {
        statusCode: statusCode as number,
        statusMessage: statusMessage as string,
        content, error
    }
}