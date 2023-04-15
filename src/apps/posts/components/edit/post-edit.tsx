import React from "react";
import styles from './post-edit.module.scss'
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../config/redux.config";

function PostEdit() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const editState = useAppSelector(root => root.postEdit)



    return (
        <div className={styles.topContainer}>

            <div className={styles.postTitleContainer}>

            </div>

            <div className={styles.postTextContainer}>

            </div>

            <div className={styles.postEditControlsContainer}>

            </div>
        </div>
    )
}

export default PostEdit