import { AuthState } from '../../interfaces';

export const initialState: AuthState = {
    checking: true,
    logged: false,
    uid: null,
    name: null,
    email: null,
};

export const resetState: AuthState = {
    uid: null,
    checking: false,
    logged: false,
    name: null,
    email: null,
};

