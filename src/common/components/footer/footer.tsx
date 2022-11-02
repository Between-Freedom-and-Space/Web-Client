import React from 'react'

import availableLinks from './assets/available-links.json'
import config from '../../assets/config.json'
import icon from './assets/favicon.ico'
import { FooterLink } from './types'

import styles from './footer.module.scss'

function Footer () {
  const companyName = `©${new Date().getFullYear()}, ${config.companyName}, Inc`
  const links = availableLinks.links as FooterLink[]
  const footerLinks = links.map((link) => {
    return <a className={styles.linkName} href={link.value} key={link.alias}>{link.alias}</a>
  })

  return (
        <footer className={styles.footerContainer}>
          <div className={styles.companyContainer}>
                <img className={styles.companyIcon} src={icon} alt="Company Icon"/>
                <p className={styles.companyName}>{companyName}</p>
            </div>
          <div className={styles.linksContainer}>{footerLinks}</div>
      </footer>
  )
}

export default Footer
