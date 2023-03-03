import React from "react";
import styles from './password-recover-flow.module.scss'
import {PasswordRecoverFlowState} from "./types";

interface Props {
    state?: PasswordRecoverFlowState
}

function PasswordRecoverFlow({
    state = PasswordRecoverFlowState.ENTERING_EMAIL
}: Props) {

}

export default PasswordRecoverFlow