import * as Yup from "yup";
import { formJson } from './customForm';


type SECTION_JSON = 'login' | 'register' | 'search-modal' | 'commnets-section' | 'upload-image'

export const getInputsFromForm = (section: SECTION_JSON ) => {
    let initialValues: { [key: string]: any } = {};
    let requiredFields: { [key: string]: any } = {};
    
    for (const field of formJson[section]) {
        initialValues[field.name] = field.value;

        if (!field.validations) continue;

        let schema = Yup.string();

        for (const rule of field.validations) {

            if(rule.type === 'oneOf' ){
                schema = schema.oneOf([Yup.ref((rule as any).ref), null], rule.message)
            }
            if (rule.type === "required") {
                schema = schema.required(rule.message);
            }

            if (rule.type === "minLength") {
                schema = schema.min(
                    (rule as any).value,
                    rule.message
                );
            }

            if (rule.type === "maxLength") {
                schema = schema.max(
                    (rule as any).value,
                    rule.message
                );
            }

            if (rule.type === "email") {
                schema = schema.email(rule.message);
            }
        }

        requiredFields[field.name] = schema;
    }

    return {
        validationSchema: Yup.object({ ...requiredFields }),
        initialValues,
        inputs:[... formJson[section]],
    };
};
