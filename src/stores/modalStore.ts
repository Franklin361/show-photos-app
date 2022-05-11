
import create, { GetState, Mutate, SetState, StoreApi } from "zustand";
import { ModalState, TypeModal } from '../interfaces';


export const useModalStore = create<
    ModalState,
    SetState<ModalState>,
    GetState<ModalState>,
    Mutate<StoreApi<ModalState>, []>
>((set) => ({
    isOpen:false,
    typeModal: null,
    dataModal: null,
    modalOpen: ( 
        isOpen:boolean, 
        typeModal: TypeModal, 
        dataModal:any = null) => set ( state => ({...state, isOpen, typeModal, dataModal}) )
}));
