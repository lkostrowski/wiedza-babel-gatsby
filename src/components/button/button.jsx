import React from 'react';

import styles from './button.module.scss';

export const Button = ({ children, iconLeft, ...props }) => (
    <button className={styles.button} {...props}>
        {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
        {children}
    </button>
);
