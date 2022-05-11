import ReactDOM from "react-dom";
import shallow from 'zustand/shallow';

import { ModalSearch } from './ModalSearch';
import { ModalUploadImage } from './ModalUploadImage';
import { ModalConfirmation } from "./ModalConfirmation";

import { useModalStore } from "../../stores";

import "./style.scss";

const modals: {[key: string]: JSX.Element} = {
  'search': <ModalSearch />,
  'upload-image': <ModalUploadImage/>,
  'confirmation': <ModalConfirmation/>
}

export const Modal = () => {
    const { changeStateModal, type } = useModalStore((state) => ({ changeStateModal: state.modalOpen, type: state.typeModal }), shallow);
    
    const handleClick = () => changeStateModal(false, null);

    const modalInterface: { [key: string]: JSX.Element } = {
      ...modals
    };

    return type
        ? ReactDOM.createPortal(
              <div className='overlay' onClick={handleClick}>
                  <div 
                    onClick={(e) => e.stopPropagation()}
                  >
                    {modalInterface[type]}
                  </div>
              </div>,
              document.getElementById("modal")!
          )
        : null;
};

