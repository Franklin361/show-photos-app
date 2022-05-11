import { Comment } from "../../interfaces/postImage/getById";
import { CommentItem } from "./";
import { memo } from 'react';


interface Prop {
    comments: Comment[]
}

export const LayoutComments = memo(({ comments }: Prop) => {
    return (
        <>
        <h4 className="title-comments">Last comments: </h4>
        <section className='section-comments'>
            <div className='comments'>
                {
                    comments.map(comment => (
                        <CommentItem key={comment.id} {...comment} />
                    ))  
                }
            </div>
        </section>
        </>
    );
});