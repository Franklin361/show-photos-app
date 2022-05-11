import { NameIcon } from './';

export interface IButtonProps {
    icon?: NameIcon
    [key:string]: any;
    className?: string;
    iconClassName?: string;
    onClick?:React.MouseEventHandler<HTMLButtonElement>;
    label?: string;
    colorIcon?: string;
}

export type TypeButtonsCard =  'like-dislike' | 'delete-edit' | 'delete' | 'whitout-buttons'