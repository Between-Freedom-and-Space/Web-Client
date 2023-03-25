export enum ProfileInformationType {
    MY_PROFILE,
    STRANGER_PROFILE
}

export interface ProfileInformationController {

    onFollowersCountClicked(): void

    onFollowingCountClicked(): void

    onSettingsIconClicked(): void

    onSaveEditButtonClicked(): void

    onFollowButtonClicked(): void
}