import cx from 'classnames';
import React from 'react';

import styles from './social-media.css';
import { FbIcon } from '../icons/fb';
import YtIcon from '../icons/yt';
import LinIcon from '../icons/lin';
import IgIcon from '../icons/instagram';

export const SocialMedia = ({className}) => {
    return (
        <div className={cx(styles['social-media'], className)}>
            <a
                className={styles.link}
                href="https://www.facebook.com/wiedzababel"
                target="_blank"
            >
                <FbIcon/>
            </a>
            <a
                className={styles.link}
                href="https://www.youtube.com/channel/UC9dIPxtP959IWnGnux0v2oQ"
                target="_blank"
            >
                <YtIcon src="/static/youtube.svg"/>
            </a>
            <a
                className={styles.link}
                href="https://www.linkedin.com/company/wiedza-babel/"
                target="_blank"
            >
                <LinIcon src="/static/linkedin.svg"/>
            </a>
            <a
                className={styles.link}
                href="https://www.instagram.com/wiedzababel/"
                target="_blank"
            >
                <IgIcon src="/static/instagram.svg"/>
            </a>
        </div>
    );
};
