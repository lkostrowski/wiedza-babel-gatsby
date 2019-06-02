import React from 'react';
import cx from 'classnames';

import lin from '../../icons/linkedin.svg';
import link from '../../icons/link.svg';
import { Link } from '../link/link';

import styles from './event.module.scss';

const SpeakerAndTalk = ({ speaker, topic, photo, linkedin, website }) => (
    <div className={styles.speakerItem}>
        <img src={photo} className={styles.photo} />
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
                        <img src={lin} />
                    </a>
                )}
                {website && (
                    <a
                        className={styles.link}
                        title="Strona internetowa"
                        href={website}
                        target="_blank"
                    >
                        <img src={link} />
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
    speakers,
    links,
}) => (
    <div className={styles.event} data-event-element>
        {upcoming && (
            <span className={styles.isUpcomingBadge}>Już wkrótce</span>
        )}
        <img
            className={cx(styles.image, { [styles.past]: !upcoming })}
            src={cover}
        />
        <span className={styles.date}>{date} - </span>
        <h2 className={styles.eventNumber}>Wiedza Babel #{number}</h2>
        <h1 className={styles.topic}>{topic}</h1>
        <div className={styles.speakersList}>
            {speakers.map((speaker) => (
                <SpeakerAndTalk key={speaker.topic} {...speaker} />
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
