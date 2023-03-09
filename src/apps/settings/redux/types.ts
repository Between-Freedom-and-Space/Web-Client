export interface SettingsState {
    readonly isAccountPrivate: boolean
    readonly newAccountEmail: string
    readonly newAccountNickname: string

    readonly isAccountSettingsLoading: boolean
    readonly isAccountDeleting: boolean
    readonly isAccountVisibilityChanging: boolean
    readonly isNicknameChanging: boolean
    readonly isEmailChanging: boolean

    readonly errorMessage?: string
}