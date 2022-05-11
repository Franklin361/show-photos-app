import { gql } from "@apollo/client";

export const LOGIN = gql`
    mutation Login($variables: UserLoginInput!) {
        login(variables: $variables) {
            message
            token
            user {
                email
                id
                name
            }
        }
    }
`;

export const REGISTER = gql`
    mutation CreateUser($variables: UserInput!) {
        createUser(variables: $variables) {
            token
            message
            user {
                id
                email
                name
            }
        }
    }
`;

export const CREATE_POST = gql`
    mutation CreatePostImage($variables: PostInput!) {
      createPostImage(variables: $variables) {
        message,
        post {
          description,
          id,
          url_image,
          user {
            id
          },
          likes,
          dislike,
          createdAt
        }
      }
    }
`

export const CREATE_COMMENT = gql`
    mutation CreateComment($variables: CommentInput!) {
      createComment(variables: $variables) {
        message,
        comment {
          description,
          id,
          createdAt
          user {
            id,
            name
          }
        }
      }
    }
`

export const UPDATE_POST = gql`
  mutation UpdatePostImage($variables: PutPostInput!) {
    updatePostImage(variables: $variables) {
      message,
      post {
        description,
        id,
        url_image,
        user {
          id
        },
        likes,
        dislike,
        createdAt
      }
  }
}
`

export const DELETE_POST = gql`
mutation DeletePostImage($deletePostImageId: String!) {
  deletePostImage(id: $deletePostImageId) {
    post {
      id
    },
    message
  }
}
`

export const UPDATE_LIKE = gql`
  mutation UpdateLikeDislikePostImage($variables: LikeDislikePostInput!) {
    updateLikeDislikePostImage(variables: $variables) {
      description,
      id,
      url_image,
      user {
        name,
        email,
        id
      },
      likes,
      dislike,
      createdAt
    }
  }
`