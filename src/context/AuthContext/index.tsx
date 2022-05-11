import { createContext, useState, useCallback } from "react";
import { useApolloClient, useLazyQuery } from "@apollo/client";

import { getTokenStorage } from "../../utils";

import { AuthContextProps, AuthState, IElementJSX, DataAuth, Retoken } from "../../interfaces";
import { initialState, resetState } from "./state";
import { TOKEN } from "../../graphql";

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: IElementJSX) => {
    const [auth, setAuth] = useState<AuthState>(initialState);

    const clientApollo = useApolloClient();

    const [getTokenServer] = useLazyQuery<Retoken>(TOKEN);

    const setAuthentication = ({ token, user }: Pick<DataAuth, "token" | "user">) => {
        localStorage.setItem("token", token);
        const { id: uid, ...rest } = user;
        setAuth({
            uid,
            ...rest,
            checking: false,
            logged: true,
        });
    };

    const setLogout = async () => {
        localStorage.removeItem("token");
        setAuth(resetState);
        await clientApollo.clearStore();
    };

    const verifyToken = useCallback(async () => {
        try {
            const token = getTokenStorage();

            if (!token) {
                setLogout();
                return;
            }

            const { data } = await getTokenServer();

            if (data) {
                const { token, user } = data.retoken;
                setAuthentication({ token, user });
                return;
            }

            setLogout();
        } catch (error) {
            console.log(error)
            setLogout();
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuthentication,
                setLogout,
                verifyToken,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
