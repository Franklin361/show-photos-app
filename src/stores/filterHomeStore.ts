import create, { GetState, Mutate, SetState, StoreApi } from "zustand";
import { GetByUser, GetPostByUser } from '../interfaces/postImage/getByUser';

type Filter = 'likes' | 'createdAt' | 'dislike'

interface FilterSelectedState {
    filter:  Filter;
    data: GetPostByUser[]
    onSelectedOption: (filter:Filter) => void;
    onChangeData: (data:GetPostByUser[]) => void;
}

export const useFilterSelectedStore = create<
    FilterSelectedState,
    SetState<FilterSelectedState>,
    GetState<FilterSelectedState>,
    Mutate<StoreApi<FilterSelectedState>, []>
>((set) => ({
    filter: 'likes',
    data:[],
    onSelectedOption: (filter:Filter) => set ( state => ({...state, filter }) ),
    onChangeData: (data:GetPostByUser[]) => set ( state => ({...state, data }) )
}));
