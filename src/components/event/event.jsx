import React from 'react';
import cx from 'classnames';

import LinkedIn from '../../icons/social/linkedin.svg';
import Website from '../../icons/link.svg';
import { Link } from '../link/link';

import styles from './event.module.scss';

const SpeakerAndTalk = ({ speaker, topic, photo, linkedin, website, company }) => (
    <div className={styles.speakerItem}>
        <img src={photo.childImageSharp.fluid.src} className={styles.photo} />
        <div>
            <p className={styles.speakerName}>{speaker}</p>
            <p className={styles.speakerTopic}>{topic}</p>
            <div className={styles.social}>
                {linkedin && (
                    <a
                        className={styles.link}
                        title="Linked in"
                        href={linkedin}
                        target="_blank"
                    >
                        <LinkedIn alt="LinkedIn" />
                    </a>
                )}
                {website && (
                    <a
                        className={styles.link}
                        title="Strona internetowa"
                        href={website}
                        target="_blank"
                    >
                        <Website alt="Strona internetowa" />
                    </a>
                )}
            </div>
        </div>
    </div>
);

export const Event = ({
    upcoming,
    cover,
    date,
    number,
    topic,
    talks,
    links,
    slug,
}) => {
    return (
        <div className={styles.event} data-event-element>
            {upcoming && (
                <span className={styles.isUpcomingBadge}>Już wkrótce</span>
            )}
            <img
                className={cx(styles.image, { [styles.past]: !upcoming })}
                src={cover.childImageSharp.fluid.src}
            />
            <span className={styles.date}>{date} - </span>
            <h2 className={styles.eventNumber}>Wiedza Babel #{number}</h2>
            <h1 className={styles.topic}>{topic}</h1>
            <div className={styles.speakersList}>
                {talks.map((talk) => (
                    <SpeakerAndTalk key={talk.topic} {...talk} />
                ))}
            </div>
            <div className={styles.links}>
                {links.map((link) => (
                    <Link key={link.href} target="_blank" href={link.href}>
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};
