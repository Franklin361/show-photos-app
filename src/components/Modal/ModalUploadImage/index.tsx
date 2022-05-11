import { Formik, Form } from "formik";
import { Button, InputForm, ImageDraggableSelected } from "../../";
import { getInputsFromForm } from "../../../utils";
import { useActionPost } from "../../../hooks";
import { IuseActionPost } from "../../../interfaces";

import "./style.scss";

const { initialValues, inputs, validationSchema } = getInputsFromForm("upload-image");

export const ModalUploadImage = () => {

    const { ...rest } = useActionPost();

    const isUpdate = !!rest.dataModal

    return (
        <div className='container-upload-modal'>
            <h3 className='title-modal'>{isUpdate ? 'Update your image 👇' : 'Upload a Image 👆'}</h3>
            <p className='instructions-modal'>
                {
                    isUpdate
                        ? 'Lorem ipsum dolor sit amet consectetur adipisicing'
                        : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, numquam?'
                }
            </p>
            <FormToCreateImage {...rest} />
        </div>
    );
};


const FormToCreateImage = ({
    dataModal,
    handleCloseModal,
    handleActionPost,
    handleDeleteImage,
    loading
}: IuseActionPost) => {

    return (

        <Formik
            initialValues={{ ...initialValues, [inputs[0].name]: dataModal ? dataModal.description : '' }}
            validationSchema={validationSchema}
            onSubmit={handleActionPost}>
            {() => (
                <div className='container-form '>
                    <Form className='form_formik' noValidate>
                        {
                            !dataModal?.url_image
                                ? <ImageDraggableSelected />
                                : <ImageSelectToUpdate
                                    src={dataModal.url_image}
                                    changeImage={handleDeleteImage} />
                        }
                        {inputs.map(({ icon, label, name, placeholder, type }) => (
                            <InputForm
                                key={name}
                                icon={icon as any}
                                name={name}
                                label={label}
                                placeholder={placeholder}
                                type={type as any}
                            />
                        ))}

                        {
                            !loading
                                ? <div className="container-btn-modal">
                                    <Button
                                        label={`${ (!!dataModal) ? 'Update' : 'Upload' }`}
                                        className='btn_submit'
                                        type='submit'
                                        icon="upload"
                                        iconClassName="icon-btn"
                                    />
                                    <Button
                                        label='Cancel'
                                        type='button'
                                        className='btn_submit cancel'
                                        onClick={handleCloseModal}
                                        icon='close'
                                        iconClassName="icon-btn"
                                    />
                                </div>
                                : <p className="loading-save-btn">Saving post-image ⏳...</p>
                        }
                    </Form>
                </div>
            )}
        </Formik>
    )
}

const ImageSelectToUpdate = ({ src, changeImage }: { src: string, changeImage: () => void }) => {

    return (
        <div className="container-image-selected">
            <img src={src} width={300} />
            <Button 
                onClick={changeImage} 
                type="button" 
                label="Change Image" className="btn-delete-image" 
                icon="edit"
                iconClassName="edit-image-selected"
            />
        </div>
    )
}