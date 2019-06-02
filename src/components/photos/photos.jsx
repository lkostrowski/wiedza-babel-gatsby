import React from 'react';

import photos from '../../content/photos';
import styles from './photos.css';

export const Photos = () => (
    <div className={styles.photos}>
        {photos.map((photo) => (
            <div key={photo} className={styles['photo-container']}>
                <img src={photo} className={styles.photo} />
            </div>
        ))}
    </div>
);
