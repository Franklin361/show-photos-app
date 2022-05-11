import { IconBaseProps } from "react-icons";
export interface IElementJSX {
    children: JSX.Element | JSX.Element[];
}

// Icons
export type NameIcon = "user-add" | "camera" | "user" | "email" | "lock" | "like" | "dislike" | 'burger'| 'search'| 'close'|'comment'|'home'|'heart'| 'image' | 'log-out'| 'delete' | 'edit'|'arrow-left'| 'watch'| 'upload'

export interface IPropsIcon extends IconBaseProps {
    name: NameIcon;
}
