import React from 'react';

import styles from './sponsors-list.module.scss';
import { graphql, useStaticQuery } from 'gatsby';

export const SponsorsList = () => {
    const data = useStaticQuery(graphql`
        query {
            allFile(filter: { sourceInstanceName: { eq: "sponsors" } }) {
                edges {
                    node {
                      publicURL
                    }
                }
            }
        }
    `);

    const logos = data.allFile.edges.map((e) => e.node.publicURL);



    return (
        <div>
            <h2 className={styles.headline}>Sponsorzy</h2>
            {logos.map((sponsor) => (
                <div className={styles.list} key={sponsor}>
                    <img src={sponsor} />
                </div>
            ))}
        </div>
    );
};
