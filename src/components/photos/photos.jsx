import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import styles from './photos.module.scss';

export const Photos = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allFile(
                    filter: { sourceInstanceName: { eq: "main-page-photos" } }
                ) {
                    edges {
                        node {
                            publicURL
                        }
                    }
                }
            }
        `,
    );

    const photos = data.allFile.edges.map((f) => f.node.publicURL);

    console.log(data)

    return (
        <div className={styles.photos}>
            {photos.map((photo) => (
                <div key={photo} className={styles.photoContainer}>
                    <img
                        src={photo}
                        className={styles.photo}
                        alt="Zdjęcie z wydarzenia"
                        key={photo}
                    />
                </div>
            ))}
        </div>
    );
};
