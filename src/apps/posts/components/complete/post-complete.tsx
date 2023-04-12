import React from "react";
import styles from './post-complete.module.scss'
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../config/redux.config";

function PostComplete() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const postCompleteState = useAppSelector(root => root.postComplete)

    return (
        <div className={styles.topContainer}>

        </div>
    )
}

export default PostComplete