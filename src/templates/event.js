import React from 'react';
import { graphql } from 'gatsby';
import { SimpleHeader } from '../components/simple-header/simple-header';

import styles from './event.module.scss';
import { ContactBar } from '../components/contact-bar/contact-bar';
import { SocialMedia } from "../components/social-media/social-media"

export default ({ pageContext, ...rest }) => {
    return (
        <div>
            <SimpleHeader />
            <h1 className={styles.eventName}>
                Wiedza Babel #{pageContext.index}
            </h1>
            <h2 className={styles.eventTopic}>
                {pageContext.topic}
            </h2>
            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: pageContext.paczka_wiedzy }}
            />
            <ContactBar />
            <SocialMedia />
        </div>
    );
};
