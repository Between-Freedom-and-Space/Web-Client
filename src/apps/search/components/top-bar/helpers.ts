import {ButtonState} from "../../../../common/components/ui-kit/button/types";

export function getSearchButtonState(isSearching: boolean): ButtonState {
    return isSearching ? ButtonState.LOADING : ButtonState.ACTIVE
}

export function formatResultCount(resultsCount: number): string {
    return `${resultsCount} results`
}