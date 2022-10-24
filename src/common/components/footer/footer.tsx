import React from 'react';

import avaliableLinks from "./assets/available-links.json";
import icon from "./assets/favicon.ico";
import { FooterLink } from './types';

import styles from './footer.module.scss';

function Footer() {
    const companyName = `©${new Date().getFullYear()}, Between Freedom and Space, Inc`
    const links = avaliableLinks.links as FooterLink[]
    const footerLinks = links.map((link) => {
        return <a className={styles.linkName} href={link.value}>{link.alias}</a>
    })

    return (
        <footer className={styles.footerContainer}>
            <div className={styles.companyContainer}>
                <img className={styles.companyIcon} src={icon}/>
                <p className={styles.companyName}>{companyName}</p>
            </div>
            <div className={styles.linksContainer}>{footerLinks}</div>
        </footer>
    );
}

export default Footer;
