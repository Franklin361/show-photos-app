import create, { GetState, Mutate, SetState, StoreApi } from "zustand";
import {ImageListType} from 'react-images-uploading';

interface ImageSelectedState {
    images: ImageListType | [] ,
    onSelectedImage: (images:ImageListType) => void
}

export const useImageSelectedStore = create<
    ImageSelectedState,
    SetState<ImageSelectedState>,
    GetState<ImageSelectedState>,
    Mutate<StoreApi<ImageSelectedState>, []>
>((set) => ({
    images: [],
    onSelectedImage: (images:ImageListType) => set ( state => ({...state,images }) )
}));
