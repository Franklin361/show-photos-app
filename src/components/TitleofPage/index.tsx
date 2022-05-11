import { useNavigate, useLocation } from 'react-router-dom';
import { Icon } from '../../assets';
import './style.scss';

export const Title = ({ label, mustBeBack = false }: { label:string, mustBeBack?: boolean }) => {

    const navigate = useNavigate();

    const handleClick =  () => navigate(-1)
    
    return (
        <div className='container-title'>
            { mustBeBack && <button className='btn-back' onClick={handleClick}>
            Back
            <Icon name='arrow-left' className='icon-btn-back' />
            </button> }
            <h1 className='title-page'>{label}</h1>
        </div>
    );
};
