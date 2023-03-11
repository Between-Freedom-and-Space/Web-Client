export interface ChangeNicknameResponse {
    result: 'success' | 'failure'
    message?: string
}

export interface ChangeEmailResponse {
    result: 'success' | 'failure'
    message?: string
}

export interface ChangeAccountVisibilityResponse {
    result: 'success' | 'failure'
    message?: string
    isAccountVisible?: boolean
}

export interface DeleteAccountResponse {
    result: 'success' | 'failure'
    message?: string
}

export interface GetAccountSettingsResponse {
    isAccountPrivate: boolean
}