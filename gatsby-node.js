const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {};

exports.createPages = ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions;

    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            slug
                            number
                        }
                    }
                }
            }
        }
    `).then((result) => {
        result.data.allMarkdownRemark.edges.forEach((edge) => {
            const { slug, number } = edge.node.frontmatter;

            createPage({
                path: slug,
                component: path.resolve(`./src/templates/event.js`),
                context: {
                    slug,
                },
            });

            createRedirect({
                fromPath: `/${number}`,
                isPermanent: true,
                toPath: slug,
                redirectInBrowser: true,
            });
        });
    });
};
