import { request, gql } from 'graphql-request';
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection {
                edges {
                  node {
                    author {
                      bio
                      name
                      id
                      photo {
                        url
                      }
                    }
                    createdAt
                    slug
                    title
                    excerpt
                    featureImage {
                      url
                    }
                    categories {
                      name
                      slug
                    }
                  }
                }
              }
        }`

        const result = await request(graphqlAPI, query);
        result.postsConnection.edges;
}