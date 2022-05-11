import { User } from "../auth";

type Props = 'createPostImage' | 'updatePostImage' | 'deletePostImage' 

export type CreatePost  = {
    [key in Props]: PostImageResponse;
}

export interface PostImageResponse {
    message: string;
    post:    Post;
}

export interface Post {
    description: string;
    id:          number;
    url_image:   string;
    user:        Pick<User, 'id'>;
    likes:       number;
    dislike:     number;
    createdAt:   string;
}
