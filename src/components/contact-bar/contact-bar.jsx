import React from 'react';

import styles from './contact-bar.css';

export const ContactBar = () => (
    <div className={styles['contact-bar']}>
        <p className={styles.text}>
            Chcesz z nami współpracować lub masz fajny pomysł, który powinniśmy
            usłyszeć? Napisz do nas!
        </p>
        <a className={styles['email-link']} href="mailto:czesc@wiedzababel.pl">
            czesc@wiedzababel.pl
        </a>
    </div>
);
