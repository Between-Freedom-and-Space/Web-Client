export enum EditControlsState {
    NOT_EDITING,
    EDITING
}

export interface EditControlsController {

    onSaveButtonClicked(): void

    onCancelButtonClicked(): void

    onEditButtonClicked(): void

    onSettingsIconClicked(): void
}