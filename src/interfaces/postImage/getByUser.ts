import { Post } from "./createdPost";

export type PropsGetPost = 'getPostByUser' | 'getPostSort'| 'getFavoritesByUser' | 'getPostByDesc' | 'newPostAdded'

export type GetByUser  = {
    [key in PropsGetPost]: GetPostByUser[];
}

export interface GetPostByUser extends Pick<Post, 'id' | 'description'| 'url_image'| 'user'  > {}


export type GetPostUpdatedLike = {
    updateLikeDislikePostImage: Post
}
