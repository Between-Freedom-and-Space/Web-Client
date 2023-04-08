import {SearchState, ShowingState} from "./types";
import {createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import searchContainer from "../di/inversify.config";
import {SearchUseCase} from "../domain/usecases/search.usecase";
import {SearchResultFailure, SearchResultSuccess} from "../domain/usecases/search-usecase.types";
import {RootState} from "../../../config/redux.config";

const container = searchContainer

export function onErrorMessageShown(state: SearchState): SearchState {
    return {
        ...state,
        errorMessage: undefined,
    }
}

export function onShowingStateChanged(
    state: SearchState,
    action: PayloadAction<ShowingState>,
): SearchState {
    return {
        ...state,
        showingState: action.payload
    }
}

export function onSearchTextChanged(
    state: SearchState,
    action: PayloadAction<string>
): SearchState {
    return {
        ...state,
        searchText: action.payload,
    }
}

export const searchThunk = createAsyncThunk<
    SearchResultSuccess,
    void,
    {rejectValue: string, state: RootState}
    >(
        'search/search',
        async (_, {rejectWithValue, getState}) => {
            const state = getState().search
            const useCase = container.get<SearchUseCase>(SearchUseCase)

            const result = await useCase.search(state.searchText)

            if (result.type === 'failure') {
                return rejectWithValue((result as SearchResultFailure).message)
            } else {
                return result as SearchResultSuccess
            }
        }
    )