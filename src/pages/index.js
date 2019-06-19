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
    return (
        <main>
            <SEO />
            <Header />
            <CtaBar className={styles.ctaBar} />
            <div className={styles.eventsList}>
                {events.map((event) => (
                    <Event key={event.index} {...event} />
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
    query MyQuery {
        allWordpressWpEvent {
            edges {
                node {
                    slug
                    link_1
                    link_1_label
                    link_2
                    link_2_label
                    link_3
                    link_3_label
                    paczka_wiedzy
                    topic
                    wordpress_id
                    index
                    event_date
                    cover {
                        guid
                    }
                    talks {
                        talk_topic
                        speaker {
                            speaker_name
                            company
                            linked_in
                            photo {
                                guid
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default compose(
    mapProps((props) => ({
        ...props,
        events: props.data.allWordpressWpEvent.edges
            .map((edge) => edge.node)
    })),
)(Homepage);
