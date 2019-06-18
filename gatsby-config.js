module.exports = {
    siteMetadata: {
        title: `Wiedza Babel`,
        description: `Rutynowe spotkania o współpracy biznesu, designu i programowania.`,
        author: `Łukasz Ostrowski`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
                ignore: ['*.scss'],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `sponsors`,
                path: `${__dirname}/src/content/sponsors`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `main-page-photos`,
                path: `${__dirname}/src/content/main-page-photos`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `events`,
                path: `${__dirname}/src/content/events`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 970,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-119172528-2',
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /icons/,
                },
            },
        },
        `gatsby-transformer-sharp`,
        {
            resolve: 'gatsby-source-wordpress',
            options: {
                /*
                 * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
                 * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
                 */
                baseUrl: 'api.wiedzababel.pl',
                // The protocol. This can be http or https.
                protocol: 'http',
                // Indicates whether the site is hosted on wordpress.com.
                // If false, then the assumption is made that the site is self hosted.
                // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
                // If your site is hosted on wordpress.org, then set this to false.
                hostingWPCOM: false,
                // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
                // This feature is untested for sites hosted on wordpress.com.
                // Defaults to true.
                useACF: false,
                // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
                // It can help you debug specific API Endpoints problems.
                verboseOutput: false,
                // Set how many pages are retrieved per API request.
                perPage: 100,
                // Set how many simultaneous requests are sent at once.
                concurrentRequests: 10,
                // Set WP REST API routes whitelists
                // and blacklists using glob patterns.
                // Defaults to whitelist the routes shown
                // in the example below.
                // See: https://github.com/isaacs/minimatch
                // Example:  `["/*/*/comments", "/yoast/**"]`
                // ` will either include or exclude routes ending in `comments` and
                // all routes that begin with `yoast` from fetch.
                // Whitelisted routes using glob patterns
                includedRoutes: ['**/event', '**/speaker', '**/talk'],
                // use a custom normalizer which is applied after the built-in ones.
                normalizer: function({ entities }) {
                    return entities
                        .filter((e) => e.__type === 'wordpress__wp_event')
                        .map((e) => {
                            const talks = e.talks;
                            const mappedTalks = talks
                                .filter((t) => typeof t.speaker)
                                .map((talk) => {
                                    let speakerKey;
                                    if (!talk.speaker) {
                                        return talk;
                                    }

                                    Object.keys(talk.speaker).forEach((id) => {
                                        speakerKey = id;
                                    });

                                    talk['speaker'] =
                                        talk.speaker[speakerKey];

                                    return talk;
                                });

                            e.talks = mappedTalks;

                            //
                            // const speakersObj = e.speakers;
                            // let speakerKey;
                            //
                            // Object.keys(speakersObj).forEach(id => speakerKey = id);
                            //
                            // console.log(speakerKey)
                            //
                            // e['___speakers'] = speakersObj[speakerKey];

                            return e;
                        });
                },
            },
        },
    ],
};
