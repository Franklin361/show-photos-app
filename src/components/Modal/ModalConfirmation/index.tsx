import './style.scss';
import { useActionPost } from '../../../hooks';
import { Button } from '../../';

export const ModalConfirmation = () => {
    const { handleCloseModal, dataModal, handleActionPost } = useActionPost();

    return (
        <div className='container-modal'>
            <h2 className='title-modal'>Are you sure about this? 🤔</h2>
            <p>The element with the id will be deleted:  {dataModal.id} ✖️</p>
            <div className="container-btn-modal">
                <Button 
                    onClick={handleActionPost} 
                    className='btn-modal-confirmation delete' 
                    label='Yes, delete it'
                    icon='delete'
                />
                <Button 
                    onClick={handleCloseModal} 
                    className='btn-modal-confirmation no-delete' 
                    label='No, cancel'
                    icon='close'
                />
            </div>
        </div>
    )
}