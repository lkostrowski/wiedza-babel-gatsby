import React from 'react';
import { Link, graphql } from 'gatsby';

import SEO from '../components/seo/seo';
import { Header } from '../components/header/header';
import { CtaBar } from '../components/cta-bar/cta-bar';
import { Photos } from '../components/photos/photos';
import { SponsorsList } from '../components/sponsors/sponsors-list';
import { ContactBar } from '../components/contact-bar/contact-bar';
import { SocialMedia } from '../components/social-media/social-media';

import styles from './index.module.scss';

const Homepage = (p) => {
    console.log(p);

    return (
        <main>
            <SEO />
            <Header />
            <CtaBar className={styles.ctaBar} />
            <div className={styles.eventsList}>
                {/*{eventsFromNewest.map((event) => (*/}
                {/*    <Event key={event.number} {...event} />*/}
                {/*))}*/}
                content
            </div>
            <Photos />
            <SponsorsList />
            <ContactBar />
            <SocialMedia />
        </main>
    );
};

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;

export default Homepage;
