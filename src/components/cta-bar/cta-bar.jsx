import React from 'react';
import cx from 'classnames';

import { Button } from '../button/button';
import styles from './cta-bar.module.scss';
import Fb from '../../icons/social/fb-button.svg';

export const CtaBar = ({ className }) => (
    <div className={cx(styles.ctaBar, className)}>
        <p className={styles.text}>
            Aktualności o wydarzeniach znajdziesz na naszym Facebooku
        </p>
        <a target="_blank" href="https://www.facebook.com/wiedzababel">
            <Button>
                <Fb className={styles.fb} /> Obserwuj nas
            </Button>
        </a>
    </div>
);
