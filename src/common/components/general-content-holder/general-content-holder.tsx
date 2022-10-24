import React, {ReactNode} from "react";

import { PageMode } from "../../../apps/page/types";

import styles from './general-content-holder.module.scss';

type Props = {
    children?: ReactNode
    mode: PageMode
}

function GeneralContentHolder({ children, mode }: Props) {
    return (
        <main className={styles.generalContainer} data-fill={mode}>
            {children}
        </main>
    );
}

export default GeneralContentHolder;
