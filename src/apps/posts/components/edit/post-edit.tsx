import React, {useEffect} from "react";
import styles from './post-edit.module.scss'
import config from './assets/config.json'

import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../config/redux.config";
import {postEditActions} from "../../redux/edit-slice";
import {PostEditType} from "../../redux/edit-types";
import {getPostThunk} from "../../redux/complete-reducers";
import Button from "../../../../common/components/ui-kit/button/button";
import {ButtonState, ButtonType, SizeType} from "../../../../common/components/ui-kit/button/types";
import {getCancelButtonLabel, getSaveButtonLabel, getSaveButtonState} from "./helpers";
import {createPostThunk, updatePostThunk} from "../../redux/edit-reducers";
import {notificationActions} from "../../../../common/services/notifications/redux/slice";
import PlainInput from "../../../../common/components/ui-kit/inputs/plain/plain-input";
import {InputController} from "../../../../common/components/ui-kit/inputs/types";
import {getPostRouting} from "../../../../config/routings.config";

function PostEdit() {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useAppDispatch()
    const editState = useAppSelector(root => root.postEdit)

    // const { postId } = useParams()
    // useEffect(() => {
    //     dispatch(getPostThunk({postId: Number.parseInt(postId!)}))
    // }, [postId])
    // if (location.pathname.includes('new')) {
    //     // dispatch(postEditActions.changeType(PostEditType.NEW_POST))
    // } else {
    //     // dispatch(postEditActions.changeType(PostEditType.EDITING))
    //     dispatch(getPostThunk({postId: Number.parseInt(postId!)}))
    // }

    if (editState.type === PostEditType.NEW_POST) {
        if (editState.postId) {
            navigate(getPostRouting(editState.postId))
        }
    }
    // useEffect(() => {
    //     if (editState.postUpdated) {
    //         navigate(getPostRouting(editState.postId!))
    //     }
    // }, [editState.postUpdated])

    const cancelButtonClickHandler = () => {
        navigate(-1)
    }
    const saveButtonClickHandler = () => {
        if (editState.type === PostEditType.NEW_POST) {
            dispatch(createPostThunk({
                title: editState.postTitle,
                text: editState.postText,
            }))
        } else {
            dispatch(updatePostThunk({
                newTitle: editState.postTitle,
                newText: editState.postText,
            }))
        }
    }
    const titleInputController: InputController = {
        onInputChanged(newInput: string) {
            dispatch(postEditActions.setPostTitle(newInput))
        },
        onEnterPressed(currentInput: string) {
            dispatch(postEditActions.setPostTitle(currentInput))
        },
    }
    const textInputController: InputController = {
        onInputChanged(newInput: string) {
            dispatch(postEditActions.setPostText(newInput))
        },
        onEnterPressed(currentInput: string) {
            dispatch(postEditActions.setPostText(currentInput))
        },
    }

    if (editState.errorMessage) {
        dispatch(notificationActions.addNotification({
            id: '0',
            type: 'danger',
            title: 'Error',
            message: editState.errorMessage,
        }))
        dispatch(postEditActions.errorShown())
    }

    return (
        <div className={styles.topContainer}>

            <div className={styles.postTitleContainer}>
                <div className={styles.postTitleLabel}>{config.title.label}</div>
                <PlainInput
                    hintText={config.title.hint}
                    text={editState.postTitle}
                    controller={titleInputController}
                />
            </div>

            <div className={styles.postTextContainer}>
                <div className={styles.postTextLabel}>{config.text.label}</div>
                <PlainInput
                    hintText={config.text.hint}
                    text={editState.postText}
                    controller={textInputController}
                />
            </div>

            <div className={styles.postEditControlsContainer}>
                <Button
                    type={ButtonType.SECONDARY}
                    state={ButtonState.ACTIVE}
                    widthType={SizeType.MAX_PERCENT}
                    onClick={cancelButtonClickHandler}
                >{getCancelButtonLabel()}</Button>
                <Button
                    type={ButtonType.PRIMARY}
                    state={getSaveButtonState(editState.isSaveLoading)}
                    widthType={SizeType.MAX_PERCENT}
                    onClick={saveButtonClickHandler}
                >{getSaveButtonLabel(editState.type)}</Button>
            </div>
        </div>
    )
}

export default PostEdit