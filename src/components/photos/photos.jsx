import React from 'react';

import photos from '../../content/photos';
import styles from './photos.module.scss';

export const Photos = () => (
    <div className={styles.photos}>
        {photos.map((photo) => (
            <div key={photo} className={styles.photoContainer}>
                <img src={photo} className={styles.photo} alt="Zdjęcie z wydarzenia" />
            </div>
        ))}
    </div>
);
