import React from "react";

import icon from "./assets/favicon.ico";

import styles from "./company-logo.module.scss";

const COMPANY_NAME = "Between Freedom and Space"

function CompanyLogo() {
    return (
        <div className={styles.companyContainer}>
            <img className={styles.companyIcon} src={icon} alt="Company Icon"/>
            <div className={styles.companyName}>{COMPANY_NAME}</div>
        </div>
    )
}

export default CompanyLogo;