import React from 'react';

import styles from './simple-header.module.scss';
import { SocialMedia } from '../social-media/social-media';

export const SimpleHeader = () => (
    <header className={styles.header}>
        <a href="/" className={styles.headerLink}>
            <img src="/logo-color.svg" className={styles.logo} alt="Logo" />
        </a>
        <SocialMedia className={styles.sm} />
    </header>
);
