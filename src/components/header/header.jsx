import React from 'react';
import styles from './header.css';
import { SocialMedia } from '../social-media/social-media';

export const Header = () => {
    const onScroll = () => {
        document
            .querySelector('[data-event-element]')
            .scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <header className={styles.header}>
            <div className={styles.top}>
                <img
                    src="/static/WB_logo_horizontal.svg"
                    className={styles.logo}
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
            <a role="button" onClick={onScroll}>
                <img
                    className={styles.arrow}
                    src="/static/arrow_in_circle.svg"
                />
            </a>
        </header>
    );
};
