import { ErrorMessage, useField } from "formik";
import { Icon } from "../../assets";
import "./style.scss";
import {  NameIcon } from '../../interfaces';
import { forwardRef } from "react";

interface Props {
    label?: string;
    name: string;
    type?: "text" | "password" | "email" | "textarea";
    placeholder?: string;
    [x: string]: any;
    icon: NameIcon;
    className?:string;
}
//TODO: Refactor this components
export const InputForm = ({ label, type ,className, ...props }: Props) => {
    const [field] = useField(props);
    
    return (
        <div className='container-input-component'>
            {label && (
                <label className='label-input' htmlFor={props.name || props.id}>
                    {label}
                </label>
            )}

            <div className='container-input-icon'>
                <Icon name={props.icon} className="icon-input" />
                {
                    type === 'textarea'
                    ? <textarea {...field}  {...props} className={className} />
                    : <input {...field} type={type} {...props} className={className} />
                }
                
            </div>

            <ErrorMessage name={props.name} component='span' className='error-input' />
        </div>
    );
};

export const InputFormWithFocus = ({ label, type, ...props }: Props, ref: any) => {
    const [field] = useField(props);
    
    return (
        <div className='container-input-component'>
            {label && (
                <label className='label-input' htmlFor={props.name || props.id}>
                    {label}
                </label>
            )}

            <div className='container-input-icon'>
                <Icon name={props.icon} className="icon-input" />
                {
                    type === 'textarea'
                    ? <textarea {...field}  {...props} ref={ref} />
                    : <input {...field} type={type} {...props} ref={ref}/>
                }
                
            </div>

            <ErrorMessage name={props.name} component='span' className='error-input' />
        </div>
    );
};


export default forwardRef(InputFormWithFocus);