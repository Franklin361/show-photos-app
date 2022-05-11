// Generated by https://quicktype.io

import { User } from "../auth";
import { Post } from "./createdPost";

export interface GetByID {
    getPostById: GetPostByID;
}

export interface GetPostByID extends Post {
    user:        User;
    comments:    Comment[];
}

export interface Comment {
    createdAt:   string;
    id:          number;
    description: string;
    user:        User;
}
