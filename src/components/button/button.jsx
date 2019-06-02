import React from 'react';

import styles from './button.css';

export const Button = ({ children, iconLeft, ...props }) => (
    <button className={styles.button} {...props}>
        {iconLeft && <span className={styles['icon-left']}>{iconLeft}</span>}
        {children}
    </button>
);
