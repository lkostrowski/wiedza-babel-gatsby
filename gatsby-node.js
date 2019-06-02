const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
    `).then((result) => {
        result.data.allMarkdownRemark.edges
            .map((edge) => edge.node.frontmatter.slug)
            .forEach((slug) => {
                createPage({
                    path: slug,
                    component: path.resolve(`./src/templates/event.js`),
                    context: {
                        slug: slug,
                    },
                });
            });
    });
};
