import React from 'react';

import styles from './link.module.scss';

export const Link = ({ children, ...props }) => (
    <a className={styles.link} {...props}>
        {children}{' '}
    </a>
);
