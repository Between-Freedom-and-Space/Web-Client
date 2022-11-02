import React from 'react'

import icon from './assets/favicon.ico'
import config from '../../../assets/config.json'

import styles from './company-logo.module.scss'
import { Link } from 'react-router-dom'

function CompanyLogo () {
  return (
        <Link to='/' className={styles.companyContainer}>
            <img className={styles.companyIcon} src={icon} alt="Company Icon"/>
            <div className={styles.companyName}>{config.companyName}</div>
        </Link>
  )
}

export default CompanyLogo
