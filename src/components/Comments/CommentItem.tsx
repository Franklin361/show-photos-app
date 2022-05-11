
import { Comment } from '../../interfaces/postImage/getById';

export const CommentItem = ({ createdAt, description, user }: Comment) => {


    return (
        <div className='item-comment'>
            <p>
                Author: <span className='author-comment'> {user.name}</span>
            </p>
            <pre className='container-msg'>{description}</pre>
            <p className='date-comment'>{new Intl.DateTimeFormat('es-MX').format(+createdAt)}</p>
        </div>
    )
}