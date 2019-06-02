import cx from 'classnames';
import React from 'react';

import styles from './social-media.module.scss';
import FbIcon  from '../../icons/social/fb.svg';
import YtIcon from '../../icons/social/yt.svg';
import LinIcon from '../../icons/social/linkedin.svg';
import IgIcon from '../../icons/social/instagram.svg';

export const SocialMedia = ({ className }) => {
    return (
        <div className={cx(styles.socialMedia, className)}>
            <a
                className={styles.link}
                href="https://www.facebook.com/wiedzababel"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FbIcon />
            </a>
            <a
                className={styles.link}
                href="https://www.youtube.com/channel/UC9dIPxtP959IWnGnux0v2oQ"
                target="_blank"
                rel="noopener noreferrer"
            >
                <YtIcon />
            </a>
            <a
                className={styles.link}
                href="https://www.linkedin.com/company/wiedza-babel/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <LinIcon />
            </a>
            <a
                className={styles.link}
                href="https://www.instagram.com/wiedzababel/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <IgIcon />
            </a>
        </div>
    );
};
