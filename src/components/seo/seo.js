import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, title }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `,
    );

    const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            defaultTitle={site.siteMetadata.title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:site_name`,
                    content: title,
                },
                {
                    // TODO: Not metadata?
                    property: `og:url`,
                    content: 'https://www.wiedzababel.pl/',
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: `fb:app_id`,
                    content: '1901383829914480', // TODO: Meta
                },
                {
                    name: `og:image:secure_url`,
                    content: 'https://www.wiedzababel.pl/wb-cover.jpg',
                },
                {
                    name: `og:image:url`,
                    content: 'https://www.wiedzababel.pl/wb-cover.jpg',
                },
                {
                    name: `og:image`,
                    content: 'https://www.wiedzababel.pl/wb-cover.jpg',
                },
                {
                    name: `og:image:type`,
                    content: 'images/jpeg',
                },
                {
                    name: `og:image:width`,
                    content: '695',
                },
                {
                    name: `og:image:height`,
                    content: '388',
                },
            ].concat(meta)}
        >
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/favicons/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicons/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicons/favicon-16x16.png"
            />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#da532c" />
        </Helmet>
    );
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
};

export default SEO;
