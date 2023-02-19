import React from "react";

import styles from './common-loader.module.scss'
import {Dna} from "react-loader-spinner";

interface Props {
    height?: number
    width?: number
    visibility: boolean
}

function CommonLoader(props: Props) {
    const DEFAULT_SIZE = 200

    return(
        <div className={styles.loaderContainer}>
            <Dna
                visible={props.visibility}
                height={props.height ?? DEFAULT_SIZE}
                width={props.width ?? DEFAULT_SIZE}
                ariaLabel="dna-loading"
                wrapperClass="dna-wrapper"
            />
        </div>
    )
}

export default CommonLoader