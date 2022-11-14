export enum ValidationResultType {
    SUCCESS = 'Success',
    FAILURE = 'Failure'
}

export interface ValidationResult {
    readonly message?: string
    readonly type: ValidationResultType
}