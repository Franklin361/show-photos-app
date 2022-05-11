export { client } from "./client";
export { 
    LOGIN, 
    REGISTER,
    CREATE_POST,
    CREATE_COMMENT,
    UPDATE_POST,
    DELETE_POST,
    UPDATE_LIKE
} from './mutations'

export { 
    TOKEN,
    GET_BY_USER,
    GET_BY_ID,
    GET_FAVORITES,
    GET_SORT,
    GET_BY_DESC,
    GET_ISFAVORITE
} from './query'

export {
    SUBS_POST_ADDED,
    SUBS_COMMENT_ADDED
} from './subscription'