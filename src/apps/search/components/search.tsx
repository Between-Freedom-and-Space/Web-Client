import React from "react";
import styles from './search.module.scss'
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../config/redux.config";

function Search() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    return (
        <div className={styles.topContainer}>

        </div>
    )
}

export default Search