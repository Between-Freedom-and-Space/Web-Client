import {SortField, SortType} from "./types";
import {ControlState} from "../../../../../common/components/ui-kit/sort-control/types";

export function getNewSortType(currentState: ControlState): SortType {
    return currentState === ControlState.ASC_SELECTED
        ? SortType.DESC : SortType.ASC
}

export function getSortByDateState(
    sortField?: SortField,
    sortType?: SortType
): ControlState {
    if (sortField === SortField.DATE) {
        return sortType === SortType.DESC ? ControlState.DESC_SELECTED : ControlState.ASC_SELECTED
    }
    return ControlState.NOT_ACTIVE
}

export function getSortByLikesState(
    sortField?: SortField,
    sortType?: SortType
): ControlState {
    if (sortField === SortField.LIKES) {
        return sortType === SortType.DESC ? ControlState.DESC_SELECTED : ControlState.ASC_SELECTED
    }
    return ControlState.NOT_ACTIVE
}

export function getSortByViewsState(
    sortField?: SortField,
    sortType?: SortType
): ControlState {
    if (sortField === SortField.VIEWS) {
        return sortType === SortType.DESC ? ControlState.DESC_SELECTED : ControlState.ASC_SELECTED
    }
    return ControlState.NOT_ACTIVE
}