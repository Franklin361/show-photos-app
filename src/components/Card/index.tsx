import { TypeButtonsCard } from "../../interfaces";
import { Button } from "../";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useCallback } from 'react';
import { GetPostByUser } from '../../interfaces/postImage/getByUser';
import { useModalStore } from "../../stores";

const ButtonDelete = ({   }:GetPostByUser) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
    }
    return (
        <div className='buttons'>
            <Button onClick={handleClick} iconClassName='icon-btn' icon='heart' />
        </div>
    );
};


const ButtonsLikeDislike = ({   }:GetPostByUser) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
    }
    return (
        <div className='buttons'>
            <Button onClick={handleClick} iconClassName='icon-btn' icon='like' />
            <Button onClick={handleClick} iconClassName='icon-btn' icon='dislike' />
        </div>
    );
};

const ButtonsDeleteEdit = ({ id, url_image, description }:GetPostByUser) => {
    const modalOpen = useModalStore(state => state.modalOpen);
    
    const handleEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        modalOpen(true, 'upload-image', { id, url_image, description });
    }

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        modalOpen(true, 'confirmation', { id });
    }

    return (
        <div className='buttons-delete-edit'>
            <Button onClick={handleDelete} iconClassName='icon-btn' icon='delete' className="delete"   />
            <Button onClick={handleEdit} iconClassName='icon-btn' icon='edit'  className="edit"  />
        </div>
    );
};



interface ButtonsCardProps {
    option: TypeButtonsCard
    card: GetPostByUser
}

const selectedButtons = ({ card, option }: ButtonsCardProps) => {
    const options = {
        'like-dislike': <ButtonsLikeDislike {...card}/>,
        'delete-edit': <ButtonsDeleteEdit {...card}/>,
        'delete': <ButtonDelete {...card}/>,
        'whitout-buttons': null
    }

    return options[option]
}


interface Props extends GetPostByUser {
    typeButtons: TypeButtonsCard
}

export const BasicCard = ({ typeButtons, ...card }: Props) => {
    console.log("card");
    const {id, url_image } = card
    
    const navigate = useNavigate();
    
    const selectedButtonsForCard = useCallback(() => selectedButtons({ card, option: typeButtons}),[typeButtons,card])

    const handleClick = useCallback(() => {
        navigate(`/home/${id}`);
    },[]);

    return (
        <div className='card' onClick={handleClick}>
            <img className='img-card' src={url_image} alt={url_image} width={100}  />
            {selectedButtonsForCard()}
        </div>
    );
};

