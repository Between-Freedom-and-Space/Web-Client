import React from "react";
import Page from "../../apps/page/page";
import {HeaderMode} from "../../common/components/header/types";
import Search from "../../apps/search/components/search";

function SearchPage() {
    return (
        <Page headerMode={HeaderMode.ONLY_LOGO}>
            <Search />
        </Page>
    )
}

export default SearchPage