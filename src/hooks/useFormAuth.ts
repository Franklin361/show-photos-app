import { getInputsFromForm, showToast } from '../utils';
import { DocumentNode, useMutation } from '@apollo/client';
import { AuthResponse } from '../interfaces';
import { useCallback, useContext } from 'react';
import { AuthContext } from '../context/AuthContext/index';
import toast from 'react-hot-toast';

interface Props{
    typeInput: 'login' | 'register',
    query: DocumentNode
}

export const useFormAuth = ({ typeInput, query }:Props) => {

    const optionsInput = getInputsFromForm(typeInput);
    const [handleAuth, {...restOptionsMutation}] = useMutation<AuthResponse>(query);
    const { setAuthentication } = useContext(AuthContext)

    const handleSubmit = useCallback(
        async (values: { [key: string]: any }) => {
            try {
                const { data } = await handleAuth({
                    variables: {
                        variables: {
                            ...values,
                        },
                    },
                });
                
                const prop = typeInput === 'register' ? 'createUser' : typeInput;
                setAuthentication(data![prop])
                toast.success(data![prop].message, { position: 'bottom-center' })

            } catch (error) {
                showConsoleError(error)
            }
        },[]
    )



    return {
        ...optionsInput,
        handleSubmit,
        ...restOptionsMutation
    }
}


const showConsoleError =  async( error: unknown ) => {
    const e = error as Error;
    console.log(
        `%c${e.message}`,
        "color:#010101;background-color:#aae;font-size:16px;font-family:Arial;font-weight:bold;padding:5px 10px;border-radius:50px"
    );

    if(e.message.includes('Failed to fetch')) showToast({ msg: 'Try it later, please' })
}