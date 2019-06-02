import React from 'react';

import styles from './header.module.scss';
import { SocialMedia } from '../social-media/social-media';

import Arrow from '../../icons/arrow_in_circle.svg';

export const Header = () => {
    const onScroll = (e) => {
        e.preventDefault();

        document
            .querySelector('[data-event-element]')
            .scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <header className={styles.header}>
            <div className={styles.top}>
                <img
                    src="/WB_logo_horizontal.svg"
                    className={styles.logo}
                    alt="Logo"
                />
                <div>
                    <SocialMedia className={styles.sm} />
                </div>
            </div>

            <p className={styles.slogan}>
                Rutynowe spotkania o współpracy biznesu,
                <br />
                designu i programowania.
            </p>
            <button className={styles.button} onClick={onScroll}>
                <Arrow className={styles.arrow} />
            </button>
        </header>
    );
};
