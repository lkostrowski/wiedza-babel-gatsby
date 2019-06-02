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

    ],
};
