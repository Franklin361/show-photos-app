import { DocumentNode } from '@apollo/client';
import { PropsGetPost } from './postImage/getByUser';
import { TypeButtonsCard } from './button';
export interface IuseActionPost {
    handleActionPost: ({ description }: any) => Promise<void>;
    loading: boolean;
    dataModal: any;
    handleCloseModal: () => void;
    handleDeleteImage: () => void;
}

export interface PropsUseGetPost {
    query: DocumentNode
    typeAccesData: PropsGetPost
    typeButtons: TypeButtonsCard;
    msg: string;
    img: string;
    variables?: any
}