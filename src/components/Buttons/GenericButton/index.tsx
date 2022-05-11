import { Icon } from '../../../assets';
import { IButtonProps } from '../../../interfaces';


export const Button = ({  icon, iconClassName, label, colorIcon, ...props }:IButtonProps) => {
    return (
        <button {...props}>
            { label && label }
            { icon && <Icon name={icon} className={iconClassName} color={colorIcon} /> }
        </button>
    );
};
