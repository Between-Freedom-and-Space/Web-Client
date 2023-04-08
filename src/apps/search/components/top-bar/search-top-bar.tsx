import React from "react";
import styles from './search-top-bar.module.scss'
import config from './assets/config.json'

import {SearchTopBarController} from "./types";
import SearchInput from "../../../../common/components/ui-kit/inputs/search/search-input";
import Button from "../../../../common/components/ui-kit/button/button";
import {ButtonType, SizeType} from "../../../../common/components/ui-kit/button/types";
import {InputController} from "../../../../common/components/ui-kit/inputs/types";
import {formatResultCount, getSearchButtonState} from "./helpers";

interface Props {
    searchText: string
    searchResultCount: number
    isSearching: boolean
    controller?: SearchTopBarController
}

function SearchTopBar({
    searchText,
    searchResultCount,
    isSearching,
    controller,
}: Props) {
    const searchInputController: InputController = {
        onInputChanged(newInput: string) {
            controller?.onSearchTextChanged(newInput)
        },
        onEnterPressed(currentInput: string) {
            controller?.onEnterPressed()
        },
    }
    const searchButtonClickHandler = () => {
        controller?.onSearchButtonClicked()
    }

    return (
        <div className={styles.topContainer}>

            <div className={styles.searchContainer}>
                <SearchInput
                    hintText={config.search.hint}
                    text={searchText}
                    controller={searchInputController}
                />
                <Button
                    type={ButtonType.PRIMARY}
                    state={getSearchButtonState(isSearching)}
                    onClick={searchButtonClickHandler}
                >{config.search.text}</Button>
            </div>

            <div className={styles.resultsCountContainer}>
                <div className={styles.resultsCount}>
                    {formatResultCount(searchResultCount)}
                </div>
            </div>
        </div>
    )
}

export default SearchTopBar