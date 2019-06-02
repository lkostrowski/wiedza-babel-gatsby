import React from 'react';
import { graphql } from 'gatsby';

export default ({ data }) => {
    console.log(data);

    return (
        <div>
            <div
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
        </div>
    );
};

// export const query = graphql`
//     query($slug: String!) {
//         markdownRemark(fields: { slug: { eq: $slug } }) {
//             html
//             frontmatter {
//                 title
//             }
//         }
//     }
// `;
