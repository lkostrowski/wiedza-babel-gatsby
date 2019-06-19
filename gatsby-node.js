const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

const createWordpressPages = require('./create-wordpress-pages');

exports.onCreateNode = ({ node, getNode, actions }) => {};

exports.createPages =async  ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions;

    await createWordpressPages({ graphql, actions });
};
