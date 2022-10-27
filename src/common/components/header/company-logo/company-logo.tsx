import React from "react";

import icon from "./assets/favicon.ico";
import config from "../../../assets/config.json";

import styles from "./company-logo.module.scss";

function CompanyLogo() {
    return (
        <div className={styles.companyContainer}>
            <img className={styles.companyIcon} src={icon} alt="Company Icon"/>
            <div className={styles.companyName}>{config.companyName}</div>
        </div>
    )
}

export default CompanyLogo;