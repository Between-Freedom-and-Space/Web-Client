import React from 'react'
import Page from '../../apps/page/page'
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
import {BackgroundColor} from "../../common/components/general-content-holder/types";
import PostsControls from "../../apps/profile/components/profile-posts/posts-controls/posts-controls";

function HomePage () {
    return (
        <Page backgroundColor={BackgroundColor.LIGHT_GREY}>
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
                    <PostsControls
                        isUserProfile={true}
                    />
                </div>
            </div>
        </Page>
    )
}

export default HomePage
