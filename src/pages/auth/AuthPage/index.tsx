import { Form, Formik } from "formik";
import { Button, InputForm } from "../../../components";
import { useFormAuth } from "../../../hooks";

import { LOGIN, REGISTER } from "../../../graphql";
import "./style.scss";

export const LoginPage = () => {

    const { handleSubmit, initialValues, inputs, validationSchema, loading } = useFormAuth({
        typeInput: "login",
        query: LOGIN
    });

    return (
        <div className='form-auth login'>
            <h2 className='title-auth-form'> {"Login"}</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                {() => (
                    <div className='container-form '>
                        <Form className='form_formik' noValidate>
                            {inputs.map(({ label, name, placeholder, type, icon }) => (
                                <InputForm
                                    label={label}
                                    name={name}
                                    placeholder={placeholder}
                                    type={type as any}
                                    key={name}
                                    icon={icon as any}
                                />
                            ))}
                            {
                                loading 
                                    ? <p className="loading-save-btn">Loading user validation ⏳...</p>
                                    : <Button className='btn_submit' label='Sign-in' type='submit' />
                            }
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    );
};

export const RegisterPage = () => {
    const { handleSubmit, initialValues, inputs, validationSchema, loading } = useFormAuth({
        typeInput: "register",
        query: REGISTER
    });

    return (
        <div className='form-auth sign-up'>
            <h2 className='title-auth-form'> {"Sign up"}</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={({repeat, ...values}) => handleSubmit(values)}>
                {() => (
                    <div className='container-form'>
                        <Form className='form_formik' noValidate>
                            {inputs.map(({ label, name, placeholder, type, icon }) => (
                                <InputForm
                                    label={label}
                                    name={name}
                                    placeholder={placeholder}
                                    type={type as any}
                                    key={name}
                                    icon={icon as any}
                                />
                            ))}
                            {
                                loading 
                                ? <p className="loading-save-btn">Loading user validation ⏳...</p>
                                : <Button className='btn_submit' label='Create account' type='submit' />
                            }
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    );
};
