export interface SearchTopBarController {

    onSearchTextChanged(newText: string): void

    onSearchButtonClicked(): void

    onEnterPressed(): void
}