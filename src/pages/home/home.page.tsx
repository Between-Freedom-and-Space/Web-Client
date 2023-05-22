import React from 'react'
import Button from '../../common/components/ui-kit/button/button'
import {ButtonState, ButtonType} from '../../common/components/ui-kit/button/types'

import calendarIcon from '../../common/components/ui-kit/assets/calendar_icon.svg'
import styles from './home-page.module.scss'
import PlainInput from "../../common/components/ui-kit/inputs/plain/plain-input";
import PasswordInput from '../../common/components/ui-kit/inputs/password/password-input'
import {PasswordInputState} from '../../common/components/ui-kit/inputs/password/types'
import SearchInput from '../../common/components/ui-kit/inputs/search/search-input'
import SortControl from "../../common/components/ui-kit/sort-control/sort-control";
import {ControlState} from "../../common/components/ui-kit/sort-control/types";
import ProfilePostsControls from '../../apps/profile/components/profile-posts/posts-controls/profile-posts-controls'
import ProfileFollowersEmpty from "../../apps/profile/components/profile-followers/empty/profile-followers-empty";
import SearchSelector from "../../apps/search/components/selector/search-selector";
import {ShowingState} from "../../apps/search/redux/types";
import SearchTopBar from "../../apps/search/components/top-bar/search-top-bar";

function HomePage () {
    return (
        <div className={styles.container}>
            <div className={styles.buttonWrapper}>
                <Button type={ButtonType.PRIMARY}>
                    Primary Button
                </Button>
            </div>
            <div className={styles.buttonWrapper}>
                <Button type={ButtonType.SECONDARY}>
                    Secondary Button
                </Button>
            </div>
            <div className={styles.buttonWrapper}>
                <Button type={ButtonType.DANGER}>
                    Danger Button
                </Button>
            </div>
            <div className={styles.buttonWrapper}>
                <Button type={ButtonType.PRIMARY} state={ButtonState.DISABLED}>
                    Primary Button
                </Button>
            </div>
            <div className={styles.buttonWrapper}>
                <Button type={ButtonType.SECONDARY} state={ButtonState.DISABLED}>
                    Secondary Button
                </Button>
            </div>
            <div className={styles.buttonWrapper}>
                <Button type={ButtonType.DANGER} state={ButtonState.DISABLED}>
                    Danger Button
                </Button>
            </div>
            <div className={styles.buttonWrapper}>
                <Button type={ButtonType.PRIMARY} state={ButtonState.LOADING}>
                    Primary Button
                </Button>
            </div>
            <div className={styles.buttonWrapper}>
                <Button type={ButtonType.SECONDARY} state={ButtonState.LOADING}>
                    Secondary Button
                </Button>
            </div>
            <div className={styles.buttonWrapper}>
                <Button type={ButtonType.DANGER} state={ButtonState.LOADING}>
                    Danger Button
                </Button>
            </div>
            <div className={styles.sortControlWrapper}>
                <SortControl label={'Date'} icon={<img src={calendarIcon}/>} state={ControlState.NOT_ACTIVE}/>
            </div>
            {/*<div className={styles.buttonWrapper}>*/}
            {/*    <Button type={ButtonType.SECONDARY}>*/}
            {/*        Follow*/}
            {/*    </Button>*/}
            {/*</div>*/}
            {/*<div className={styles.buttonWrapper}>*/}
            {/*    <Button type={ButtonType.PRIMARY}>*/}
            {/*        Follow*/}
            {/*    </Button>*/}
            {/*</div>*/}
            {/*<div className={styles.buttonWrapper}>*/}
            {/*    <Button type={ButtonType.PRIMARY}>*/}
            {/*        Sign Up*/}
            {/*    </Button>*/}
            {/*</div>*/}
            <div className={styles.buttonWrapper}>
                <PlainInput hintText={"Hello World"}/>
            </div>
            <div className={styles.buttonWrapper}>
                <PasswordInput hintText={"Hello World"} currentState={PasswordInputState.INPUT_IS_VALID}/>
            </div>
            <div className={styles.buttonWrapper}>
                <PasswordInput hintText={"Hello World"} currentState={PasswordInputState.INPUT_IS_INVALID}/>
            </div>
            <div className={styles.buttonWrapper}>
                <PasswordInput hintText={"Hello World"} currentState={PasswordInputState.INPUT_IN_PROGRESS}/>
            </div>
            <div className={styles.buttonWrapper}>
                <SearchInput hintText={"Search or jump to..."}/>
            </div>
            <div className={styles.sortControlWrapper}>
                <ProfilePostsControls
                    isUserProfile={true}
                />
            </div>
            <div className={styles.sortControlWrapper}>
                <ProfileFollowersEmpty state='followers'/>
            </div>
            <div className={styles.sortControlWrapper}>
                <SearchSelector postsCount={21} profilesCount={31} state={ShowingState.SHOWING_POSTS}/>
            </div>
            <div className={styles.sortControlWrapper}>
                <SearchTopBar searchText={""} searchResultCount={213} isSearching={false}/>
            </div>
        </div>
    )
}

export default HomePage
