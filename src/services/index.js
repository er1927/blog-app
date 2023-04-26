import { request, gql } from 'graphql-request'

export const getPosts = () => {
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
}