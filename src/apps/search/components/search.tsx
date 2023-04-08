import React, {ReactNode} from "react";
import styles from './search.module.scss'
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../config/redux.config";
import SearchTopBar from "./top-bar/search-top-bar";
import SearchSelector from "./selector/search-selector";
import {SearchSelectorController} from "./selector/types";
import {SearchTopBarController} from "./top-bar/types";
import {notificationActions} from "../../../common/services/notifications/redux/slice";
import {searchActions} from "../redux/slices";
import {PostBaseInformation, ProfileBaseInformation, ShowingState} from "../redux/types";
import {searchThunk} from "../redux/reducers";
import ProfileSmall from "../../../common/components/profile/small/profile-small";
import {getPostRouting, getProfileRouting} from "../../../config/routings.config";
import PostSmall from "../../posts/components/small/post-small";

function Search() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const searchState = useAppSelector(root => root.search)

    const selectorController: SearchSelectorController = {
        onTabClicked(tabName: "posts" | "profiles") {
            let newShowingState = ShowingState.SHOWING_PROFILES
            if (tabName === 'posts') {
                newShowingState = ShowingState.SHOWING_POSTS
            }
            dispatch(searchActions.setShowingState(newShowingState))
        },
    }
    const topBarController: SearchTopBarController = {
        onEnterPressed() {
            dispatch(searchThunk())
        },
        onSearchButtonClicked() {
            dispatch(searchThunk())
        },
        onSearchTextChanged(newText: string) {
            dispatch(searchActions.searchTextChanged(newText))
        },
    }

    const profileComponentMapper = (profile: ProfileBaseInformation) => {
        return (
            <ProfileSmall
                nickname={profile.nickname}
                name={profile.name}
                postsCount={profile.postsCount}
                followersCount={profile.followersCount}
                isFollowing={profile.isUserFollowing}
                isFollowLoading={profile.isFollowLoading}
                controller={{
                    onNameClicked() {
                        navigate(getProfileRouting(profile.id))
                    },
                    onProfileIconClicked() {
                        navigate(getProfileRouting(profile.id))
                    },
                    onNicknameClicked() {
                        navigate(getProfileRouting(profile.id))
                    },
                    onPostsCountClicked() {
                        navigate(getProfileRouting(profile.id))
                    },
                    onFollowButtonClicked() {
                        navigate(getProfileRouting(profile.id))
                    },
                }}
            />
        )
    }
    const postComponentMapper = (post: PostBaseInformation) => {
        return (
            <PostSmall
                nickname={post.authorNickname}
                name={post.authorName}
                postText={post.text}
                controller={{
                    onNameClicked() {
                        navigate(getPostRouting(post.id))
                    },
                    onNicknameClicked() {
                        navigate(getPostRouting(post.id))
                    },
                    onProfileIconClicked() {
                        navigate(getPostRouting(post.id))
                    },
                    onPostTextClicked() {
                        navigate(getPostRouting(post.id))
                    },
                }}
            />
        )
    }

    let content: ReactNode = null
    switch (searchState.showingState) {
    case ShowingState.SHOWING_POSTS: {
        content = searchState.foundPosts.map(postComponentMapper)
        break
    }
    case ShowingState.SHOWING_PROFILES: {
        content = searchState.foundProfiles.map(profileComponentMapper)
        break
    }
    }

    if (searchState.errorMessage) {
        dispatch(notificationActions.addNotification({
            id: '0',
            type: 'danger',
            title: 'Error',
            message: searchState.errorMessage
        }))
        dispatch(searchActions.errorShown())
    }

    return (
        <div className={styles.topContainer}>

            <div className={styles.selectorContainer}>
                <SearchSelector
                    postsCount={searchState.foundPostsCount}
                    profilesCount={searchState.foundProfilesCount}
                    state={searchState.showingState}
                    controller={selectorController}
                />
            </div>

            <div className={styles.searchContentContainer}>
                <SearchTopBar
                    searchText={searchState.searchText}
                    searchResultCount={searchState.foundTotalCount}
                    isSearching={searchState.isLoading}
                    controller={topBarController}
                />

                <div className={styles.contentEntitiesContainer}>
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Search