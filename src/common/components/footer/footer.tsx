import React from 'react';

import styles from './footer.module.scss';

type Props = {
    staticPages: Array<{
        name: string
        link: string
    }>
}

function Footer(props?: Props) {
    if (props == undefined || props == null) {
        props = {
            staticPages: Array.from([
                {
                    name: "test1",
                    link: "link1"
                }
            ])
        }
    }
    const links = props!.staticPages.map((page) => {
        return <div></div>
    })
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.companyContainer}>

            </div>
            <div className={styles.linksContainer}>
                {links}
            </div>
        </footer>
    );
}

export default Footer;
