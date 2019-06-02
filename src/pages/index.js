import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo/seo';
import { Header } from '../components/header/header';
import { CtaBar } from '../components/cta-bar/cta-bar';
import { Photos } from '../components/photos/photos';
import { SponsorsList } from '../components/sponsors/sponsors-list';
import { ContactBar } from '../components/contact-bar/contact-bar';
import { SocialMedia } from '../components/social-media/social-media';

import styles from './index.module.scss';
import { compose, mapProps } from 'recompose';
import { Event } from '../components/event/event';

const Homepage = ({ events }) => {
    console.log(events)
    return (
        <main>
            <SEO />
            <Header />
            <CtaBar className={styles.ctaBar} />
            <div className={styles.eventsList}>
                {events.map((event) => (
                    <Event key={event.number} {...event} />
                ))}
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
        allMarkdownRemark(sort: {fields: frontmatter___number, order: DESC}) {
            edges {
                node {
                    frontmatter {
                        slug
                        title
                        talks {
                            speaker
                            topic
                            linkedin
                            website
                            photo
                        }
                        topic
                        upcoming
                        number
                        date
                        links {
                            href
                            label
                        }
                    }
                }
            }
        }
        allFile(
            filter: {
                sourceInstanceName: { eq: "events" }
                relativeDirectory: { glob: "*/speakers" }
            }
        ) {
            nodes {
                publicURL
            }
        }
    }
`;

/**
 * TODO: This should be all in GQL query
 */
export default compose(
    mapProps((props) => ({
        ...props,
        events: props.data.allMarkdownRemark.edges
            .map((edge) => edge.node.frontmatter)
            .map((event) => {
                const photos = props.data.allFile.nodes.map((p) => p.publicURL);

                console.log(event)

                const speakers = event.talks.map((talk) => {
                    const photo = talk.photo;
                    const photoUrl = photos.find((p) => p.includes(photo));

                    return { ...talk, photo: photoUrl };
                });

                return { ...event, talks: speakers };
            }),
    })),
)(Homepage);
