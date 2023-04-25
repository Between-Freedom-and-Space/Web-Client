import React from 'react'
import Page from '../../apps/page/page'
import PostEdit from "../../apps/posts/components/edit/post-edit";
import {HeaderMode} from "../../common/components/header/types";
import {ContentDisplayMode} from "../../common/components/general-content-holder/types";

function EditorPage () {
    return (
        <Page
            headerMode={HeaderMode.AUTHORIZED}
            contentDisplayMode={ContentDisplayMode.FIT_CONTENT}
        >
            <PostEdit />
        </Page>
    )
}

export default EditorPage