export type TypeModal = 'search' | 'logout' | 'delete'| 'upload-image'| 'confirmation'| null

export interface ModalState {
    isOpen:boolean;
    modalOpen: (isOpen:boolean, typeModal: TypeModal, dataModal?: unknown) => void;
    typeModal: TypeModal;
    dataModal: any;
};

