module.exports = async ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions;

    const data = await graphql(`
      query MyQuery {
  allWordpressWpEvent {
    edges {
      node {
        link_1
        link_1_label
        link_2
        link_2_label
        link_3
        link_3_label
        paczka_wiedzy
        topic
        wordpress_id
        talks {
          talk_topic
          speaker {
            speaker_name
            company
            linked_in
            photo {
              guid
            }
          }
        }
      }
    }
  }
}

    `).then(d => console.log(JSON.stringify((d))));
};
