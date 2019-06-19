import React from 'react';
import cx from 'classnames';

import LinkedIn from '../../icons/social/linkedin.svg';
import Website from '../../icons/link.svg';
import { Link } from '../link/link';

import styles from './event.module.scss';

const SpeakerAndTalk = ({ talk_topic, speaker, ...p }) => {
    return (
        <div className={styles.speakerItem}>
            <img src={speaker.photo.guid} className={styles.photo} />
            <div>
                <p className={styles.speakerName}>{speaker.speaker_name}</p>
                <p className={styles.speakerTopic}>{talk_topic}</p>
                <div className={styles.social}>
                    {speaker.linked_in && (
                        <a
                            className={styles.link}
                            title="Linked in"
                            href={speaker.linkedin}
                            target="_blank"
                        >
                            <LinkedIn alt="LinkedIn" />
                        </a>
                    )}
                    {speaker.website && (
                        <a
                            className={styles.link}
                            title="Strona internetowa"
                            href={speaker.website}
                            target="_blank"
                        >
                            <Website alt="Strona internetowa" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export const Event = ({
    cover,
    link_1,
    link_1_label,
    link_2,
    link_2_label,
    link_3,
    link_3_label,
    topic,
    event_date,
    index,
    talks,
}) => {
    const links = [
        {
            label: link_1_label,
            href: link_1,
        },
        {
            label: link_2_label,
            href: link_2,
        },
        {
            label: link_3_label,
            href: link_3,
        },
    ].filter((l) => l.label.length);

    return (
        <div className={styles.event} data-event-element>
            {false && (
                <span className={styles.isUpcomingBadge}>Już wkrótce</span>
            )}
            <img
                className={cx(styles.image, { [styles.past]: true })}
                src={cover.guid}
            />
            <span className={styles.date}>{event_date} - </span>
            <h2 className={styles.eventNumber}>Wiedza Babel #{index}</h2>
            <h1 className={styles.topic}>{topic}</h1>
            <div className={styles.speakersList}>
                {talks.map((talk) => (
                    <SpeakerAndTalk key={talk.talk_topic} {...talk} />
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
