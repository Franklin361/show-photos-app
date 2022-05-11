
import { Button } from '..';
import { useModalStore } from '../../../stores';
import { NameIcon, TypeModal } from '../../../interfaces';
import './style.scss';

export const OpenModalButton = ({ icon,typeModal }:{ icon: NameIcon, typeModal:TypeModal }) => {
    const changeModalOpen = useModalStore((state) => state.modalOpen);
    const handleClick = () => changeModalOpen(true, typeModal);
    return (
        <Button className='btn-search' onClick={handleClick} icon={icon} colorIcon='#fff' />
    );
};