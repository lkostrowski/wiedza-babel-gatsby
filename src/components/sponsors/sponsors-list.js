import React from 'react';
import { sponsors } from '../../content/sponsors';

import styles from './sponsors-list.module.scss'

export const SponsorsList = () => (
    <div>
        <h2 className={styles.headline}>Sponsorzy</h2>
        {sponsors.map((sponsor) => (
            <div className={styles.list}  key={sponsor} >
                <img src={sponsor}/>
            </div>
        ))}
    </div>
);
