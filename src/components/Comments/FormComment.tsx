import { Formik, Form } from 'formik';
import { getInputsFromForm } from '../../utils';
import { Button, InputForm } from '../';

import './style.scss'
import { useMutation, useSubscription } from '@apollo/client';
import { CREATE_COMMENT } from '../../graphql';
import { CreateComment } from '../../interfaces';
import { GET_BY_ID } from '../../graphql/query';
import { GetByID } from '../../interfaces/postImage/getById';
import { useRef } from 'react';
import toast from 'react-hot-toast';
import { SUBS_COMMENT_ADDED } from '../../graphql/subscription';

const { initialValues, inputs, validationSchema } = getInputsFromForm("commnets-section");
interface Prop {
    id_post: number
}
// TODO: refactor function and component
export const FormComment = ({ id_post }:Prop) => {
    const form = useRef<HTMLFormElement>(null);

    const [handleCreateComment] = useMutation<CreateComment>(CREATE_COMMENT);
    


    const handleSubmit = async ({comment}: any) => {
        const { data } = await handleCreateComment({
            variables: {
                variables: {
                    description: comment,
                    id_post: `${id_post}`
                }
            }
        });

        form.current?.reset();
        toast.success(data!.createComment.message);
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {() => (
                <Form className='form_formik-comments' noValidate ref={form}>
                {inputs.map(({ icon, label, name, type, placeholder }) => (
                    <InputForm
                        key={name}
                        icon={icon as any}
                        name={name}
                        label={label}
                        placeholder={placeholder}
                        type={type as any}
                        className='input-text-area'
                    />
                ))}
                <Button
                    label='Add comment'
                    className='btn_submit-comment'
                    type='submit'
                />
            </Form>
            )}
        </Formik>
    )
}