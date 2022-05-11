import { Icon } from '../../assets';
import { GetIsFavorite } from '../../interfaces';
import { User } from '../../interfaces/auth';
import { Post } from '../../interfaces/postImage/createdPost';
import { useSetLikes } from '../../hooks';

import "./style.scss";
import { useEffect } from 'react';

export interface GetPostByID extends Post {
    user: User
    dataLiked: GetIsFavorite | null
}

export const ImageInformation = (post: GetPostByID) => {

    const { createdAt, description, url_image, user } = post;

    return (
        <section className='grid_section'>
            <div className='image-selected'>
                <img src={url_image} alt='Card' width={100} className='img-section' />
            </div>

            <section className='information'>
                <p className='with-subtitle author-info'>
                    <b className='subtitle'>Author:</b> <span className='author' >{user.name}</span>
                </p>
                <p className='with-subtitle description'>
                    <b className='subtitle'>Description:</b> <span>{description}</span>
                </p>
                <p className='date-card'>
                    <b>{new Intl.DateTimeFormat('es-MX').format(+createdAt)}</b>
                </p>
                <div className='container-likes'>
                    <ButtonsImage {...post} />
                </div>
            </section>
        </section>
    );
};

const ButtonsImage = ({ dataLiked, ...rest }: GetPostByID) => {

    const { handleDislike, handleLike, input_dislike, input_like } = useSetLikes({ ...rest })


    useEffect(() => {
        if ((!!dataLiked && dataLiked.type === "true")) {

            input_like.current!.checked = true;
        }
        if ((!!dataLiked && dataLiked.type === "false")) {

            input_dislike.current!.checked = true;
        }
    }, [dataLiked])


    return (
        <>
            <div>
                <input
                    type="checkbox"
                    onChange={handleLike}
                    ref={input_like}

                    id='like'
                    className='like'
                />
                <label className='btn-like' htmlFor='like'>
                    <Icon name='like' />
                    <span id='like-number' className='like-number'>{rest.likes}</span>
                </label>
            </div>

            <div>
                <input
                    type="checkbox"
                    onChange={handleDislike}
                    ref={input_dislike}

                    id='dislike'
                    className='dislike'
                />
                <label className='btn-like' htmlFor='dislike'>
                    <Icon name='dislike' />
                    <span id='dislike-number' className='dislike-number'>{rest.dislike}</span>
                </label>
            </div>
        </>
    )
}