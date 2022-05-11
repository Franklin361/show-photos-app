import { useRef } from 'react';
import { useMutation } from '@apollo/client';
import { GetByUser, GetFavorite, GetPostUpdatedLike } from '../interfaces';
import { GET_FAVORITES, GET_ISFAVORITE, UPDATE_LIKE } from '../graphql';
import { Post } from '../interfaces/postImage/createdPost';

export const useSetLikes = ({  description, id, likes, url_image, ...rest }: Post) => {

    const input_like = useRef<HTMLInputElement>(null);
    const input_dislike = useRef<HTMLInputElement>(null);

    const [handleUpdate] = useMutation<GetPostUpdatedLike>(UPDATE_LIKE, {
        update: (store, response,) => {

            const like = input_like.current?.checked;
            const dislike = input_dislike.current?.checked;

            const dataGetIsFavorite = store.readQuery<GetFavorite>({ query: GET_ISFAVORITE, variables: { getIsFavoriteId: `${id}` } });

            store.writeQuery({
                query: GET_ISFAVORITE,
                variables: { getIsFavoriteId: `${id}` },
                data: {
                    ...dataGetIsFavorite,
                    getIsFavorite: (!like && !dislike)
                        ? null
                        : {
                            ...dataGetIsFavorite?.getIsFavorite,
                            post: {
                                id
                            },
                            type: (like ? 'true' : 'false')
                        }
                }
            });

            if (like) {
                const dataGetFavorites = store.readQuery<GetByUser>({ query: GET_FAVORITES }) //getFavoritesByUser
                const newPost = {
                    description,
                    dislike: rest.dislike,
                    likes,
                    id,
                    url_image
                }
                store.writeQuery({
                    query: GET_FAVORITES,
                    data: {
                        ...dataGetFavorites,
                        getFavoritesByUser: [
                            newPost,
                            ...(dataGetFavorites ? dataGetFavorites.getFavoritesByUser : [])
                        ]
                    }
                });
            }
            if (dislike || (!like && !dislike)) {
                const dataGetFavorites = store.readQuery<GetByUser>({ query: GET_FAVORITES }) //getFavoritesByUser

                const newData = dataGetFavorites?.getFavoritesByUser
                    ? dataGetFavorites.getFavoritesByUser.filter(post => post.id !== response.data?.updateLikeDislikePostImage.id)
                    : []
                
                store.writeQuery({
                    query: GET_FAVORITES,
                    data: {
                        ...dataGetFavorites,
                        getFavoritesByUser: [
                            ...newData
                        ]
                    }
                });


            }
        }
    });

    const handleDislike = async () => {
        document.querySelector('#dislike-number')?.classList.add('dislike-number');
        if (input_like.current?.checked) {
            input_like.current.checked = false;
        }

        if (!input_dislike.current?.checked) {
            await handleUpdate({
                variables: {
                    variables: {
                        dislike: false,
                        likes: false,
                        id: `${id}`
                    }
                }
            });
        } else {
            await handleUpdate({
                variables: {
                    variables: {
                        dislike: true,
                        likes: false,
                        id: `${id}`
                    }
                }
            });
        }

    }

    const handleLike = async () => {
        document.querySelector('#like-number')?.classList.add('like-number');
        if (input_dislike.current?.checked) {
            input_dislike.current.checked = false;
        }

        if (!input_like.current?.checked) {
            await handleUpdate({
                variables: {
                    variables: {
                        dislike: false,
                        likes: false,
                        id: `${id}`
                    }
                }
            });
        } else {
            await handleUpdate({
                variables: {
                    variables: {
                        dislike: false,
                        likes: true,
                        id: `${id}`
                    }
                }
            });
        }


    }

    return {
        handleDislike,
        handleLike,
        input_like,
input_dislike
    }
}