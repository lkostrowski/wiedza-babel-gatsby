import React from 'react';
import { Link, graphql } from 'gatsby';

import SEO from '../components/seo/seo';

const Homepage = (p) => {
    console.log(p);

    return (
        <div>
            <SEO />
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>

            <Link to="/page-2/">Go to page 2</Link>
        </div>
    );
};

export const query = graphql`
    query {
        site {
            siteMetadata {
                title,
                description
            }
        }
    }
`;

export default Homepage;
