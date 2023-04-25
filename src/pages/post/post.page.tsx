import React from "react";
import Page from "../../apps/page/page";
import PostComplete from "../../apps/posts/components/complete/post-complete";
import {HeaderMode} from "../../common/components/header/types";
import {BackgroundColor, ContentDisplayMode} from "../../common/components/general-content-holder/types";

function PostPage() {
    return (
        <Page
            headerMode={HeaderMode.AUTHORIZED}
            backgroundColor={BackgroundColor.LIGHT_GREY}
            contentDisplayMode={ContentDisplayMode.FIXED_CONTENT}
        >
            <PostComplete />
        </Page>
    )
}

export default PostPage