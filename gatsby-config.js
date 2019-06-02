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
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `sponsors`,
                path: `${__dirname}/src/content/sponsors`,
            },
        },
        `gatsby-transformer-remark`,
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
    ],
};
