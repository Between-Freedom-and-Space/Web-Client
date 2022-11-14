export interface Error {
    readonly errorId: number
    readonly message: string
}

export interface Response <T> {
    readonly statusCode: number
    readonly statusMessage: string
    readonly content?: T
    readonly error?: Error
}