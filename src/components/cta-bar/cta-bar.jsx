import React from 'react';
import cx from 'classnames';
import { Button } from '../button/button';
import styles from './cta-bar.css';
import fb from '../../static/fb-button.svg';

export const CtaBar = ({ className }) => (
    <div className={cx(styles['cta-bar'], className)}>
        <p className={styles.text}>
            Aktualności o wydarzeniach znajdziesz na naszym Facebooku
        </p>
        <a target="_blank" href="https://www.facebook.com/wiedzababel">
            <Button>
                Obserwuj nas <img className={styles.fb} src={fb} />
            </Button>
        </a>
    </div>
);
