export interface DeleteAccountResult {
    type: 'success' | 'failure'
    message?: string
}

export interface ChangeAccountNicknameResult {
    type: 'success' | 'failure'
    message?: string
}

export interface ChangeAccountEmailResult {
    type: 'success' | 'failure'
    message?: string
}

export interface GetAccountSettingsResult {
    type: 'success' | 'failure'
}

export interface GetAccountSettingsFailure extends GetAccountSettingsResult {
    type: 'failure'
    message: string
}

export interface GetAccountSettingsSuccess extends GetAccountSettingsResult {
    type: 'success'
    isAccountPrivate: boolean
}

export interface ChangeAccountVisibilityResult {
    type: 'success' | 'failure'
}

export interface ChangeAccountVisibilityFailure extends ChangeAccountVisibilityResult {
    type: 'failure'
    message: string
}

export interface ChangeAccountVisibilitySuccess extends ChangeAccountVisibilityResult {
    type: 'success'
    isAccountPrivate: boolean
}