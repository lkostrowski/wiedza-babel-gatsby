import React from 'react';
import { graphql } from 'gatsby';
import { SimpleHeader } from '../components/simple-header/simple-header';

import styles from './event.module.scss';
import { ContactBar } from '../components/contact-bar/contact-bar';
import { SocialMedia } from "../components/social-media/social-media"

export default ({ data }) => {
    return (
        <div>
            <SimpleHeader />
            <h1 className={styles.eventName}>
                Wiedza Babel #{data.markdownRemark.frontmatter.number}
            </h1>
            <h2 className={styles.eventTopic}>
                {data.markdownRemark.frontmatter.topic}
            </h2>
            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
            <ContactBar />
            <SocialMedia />
        </div>
    );
};

export const query = graphql`
    query PageData($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                topic
                number
            }
        }
    }
`;
