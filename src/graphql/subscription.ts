import { gql } from '@apollo/client';

export const SUBS_POST_ADDED = gql`
subscription NewPostAdded($typeSort: String!) {
  newPostAdded(type_sort: $typeSort) {
    id,
    description,
    dislike,
    likes,
    url_image,
    user {
      id  
    }
  }
}
`

export const SUBS_COMMENT_ADDED = gql`
subscription NewCommentAdded($idPost: String!) {
  newCommentAdded(id_post: $idPost) {
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