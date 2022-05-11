import { useEffect, useRef } from "react";
import { Formik, Form } from 'formik';

import { useSearchParams } from 'react-router-dom';
import { useModalStore } from '../../../stores/modalStore';

import { Button } from '../..';
import InputFormWithFocus from '../../InputForm';

import { getInputsFromForm } from "../../../utils";

import './style.scss'

 const { initialValues, inputs, validationSchema } = getInputsFromForm("search-modal");

export const ModalSearch = () => {

    const [_, setSearchParams] = useSearchParams();
    const changeStateModal = useModalStore(state => state.modalOpen)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current && inputRef.current.focus();
    }, [])
    

    return (
        <div className='container-search-modal'>
            <h3 className="title-modal">Search an image</h3>
            
            <p className="instructions-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, numquam?</p>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(value) => {
                    setSearchParams( { q: value.search });
                    changeStateModal(false,null);
                }}>
                {() => (
                    <div className='container-form '>
                        <Form className='form_formik' noValidate>
                            {
                                inputs.map( ({ icon, label, name, placeholder,type }) => (
                                    <InputFormWithFocus
                                        key={name}
                                        icon={icon}
                                        name={name}
                                        label={label}
                                        placeholder={placeholder}
                                        type={type}
                                        ref={inputs.length === 1 ? inputRef: null}
                                    />
                                ))
                            }
                            <Button label="Search" className="btn_submit" type='submit' />
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    );
  };
  
  
  