import React from 'react';

import styles from './contact-bar.module.scss';

export const ContactBar = () => (
    <div className={styles.contactBar}>
        <p className={styles.text}>
            Chcesz z nami współpracować lub masz fajny pomysł, który powinniśmy
            usłyszeć? Napisz do nas!
        </p>
        <a className={styles.emailLink} href="mailto:czesc@wiedzababel.pl">
            czesc@wiedzababel.pl
        </a>
    </div>
);
