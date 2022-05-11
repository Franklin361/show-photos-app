import { gql } from "@apollo/client";

export const TOKEN = gql`
    query Retoken {
        retoken {
            token
            user {
                email
                id
                name
            }
        }
    }
`;

export const GET_BY_USER = gql`
    query GetPostByUser {
        getPostByUser {
            user {
                id
            }
            description
            url_image
            id
        }
    }
`;

export const GET_BY_ID = gql`
    query GetPostById($getPostByIdId: String!) {
  getPostById(id: $getPostByIdId) {
    createdAt,
    description,
    dislike,
    likes,
    id,
    url_image,
    user {
      name,
      email,
      id
    },
    comments {
      createdAt,
      id,
      description,
      user {
        id,
        name
      }
    }
  }
}
`
export const GET_SORT = gql`
query GetPostSort($typeSort: String!) {
  getPostSort(type_sort: $typeSort) {
    id,
    description,
    dislike,
    likes,
    url_image
  }
}
`

export const GET_FAVORITES = gql`
  query GetFavoritesByUser {
  getFavoritesByUser {
    id,
    description,
    dislike,
    likes,
    url_image
  }
}
`

export const GET_BY_DESC = gql`
  query GetPostByDesc($description: String!) {
      getPostByDesc(description: $description) {
        id,
        description,
        dislike,
        likes,
        url_image
      }
    }
`

export const GET_ISFAVORITE = gql`
  query GetIsFavorite($getIsFavoriteId: String!) {
    getIsFavorite(id: $getIsFavoriteId) {
      type,
      post {
        id
      }
    }
  }
`