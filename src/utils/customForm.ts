export const formJson  = {
    "login": [
        {
            "type": "email",
            "name": "email",
            "placeholder": "example@example.com",
            "label": "E-mail",
            "value": "",
            "validations": [
                {
                    "type": "required",
                    "message": "Email is required"
                },
                {
                    "type": "email",
                    "message": "Email no valid"
                }
            ],
            "icon": "email"
        },
        {
            "type": "password",
            "name": "password",
            "placeholder": "************",
            "label": "Password",
            "value": "",
            "validations": [
                {
                    "type": "required",
                    "message": "Password is required"
                }
            ],
            "icon": "lock"
        }
    ],
    "register": [
        {
            "type": "text",
            "name": "name",
            "placeholder": "Example",
            "label": "Full Name",
            "value": "",
            "validations": [
                {
                    "type": "required",
                    "message": "Full Name is required"
                },
                {
                    "type": "minLength",
                    "value": 5,
                    "message": "Full Name must be of 5 letters"
                }
            ],
            "icon": "user"
        },
        {
            "type": "email",
            "name": "email",
            "placeholder": "example@example.com",
            "label": "E-mail",
            "value": "",
            "validations": [
                {
                    "type": "required",
                    "message": "Email is required"
                },
                {
                    "type": "email",
                    "message": "Email no valid"
                }
            ],
            "icon": "email"
        },
        {
            "type": "password",
            "name": "password",
            "placeholder": "************",
            "label": "Password",
            "value": "",
            "validations": [
                {
                    "type": "required",
                    "message": "Password is required"
                },
                {
                    "type": "minLength",
                    "value": 5,
                    "message": "Repeat Password must be of 5 letters"
                }
            ],
            "icon": "lock"
        },
        {
            "type": "password",
            "name": "repeat",
            "placeholder": "************",
            "label": "Repeat Password",
            "value": "",
            "validations": [
                {
                    "type": "required",
                    "message": "Repeat Password is required"
                },
                {
                    "type": "oneOf",
                    "ref": "password",
                    "message": "Passwords must match"
                }
            ],
            "icon": "lock"
        }
    ],
    "commnets-section":[
        {
            "type": "textarea",
            "name": "comment",
            "placeholder": "example",
            "label": "Introduce a comment",
            "value": "",            
            "validations": [
                {
                    "type": "required",
                    "message": "This field is required"
                },
                {
                    "type": "minLength",
                    "value": 5,
                    "message": "The term must be min of 5"
                },
                {
                    "type": "maxLength",
                    "value": 120,
                    "message": "The term must be max of 120"
                }
            ],
            "icon": "comment"
        }
    ],
    "search-modal":[
        {
            "type": "text",
            "name": "search",
            "placeholder": "dogs",
            "label": "Introduce a word",
            "value": "",            
            "validations": [
                {
                    "type": "required",
                    "message": "This field is required"
                },
                {
                    "type": "minLength",
                    "value": 3,
                    "message": "The term must be of min 3 letters"
                },
                {
                    "type": "maxLength",
                    "value": 20,
                    "message": "The term must be max of 20"
                }
            ],
            "icon": "search"
        }
    ],
    "upload-image":[
        {
            "type": "textarea",
            "name": "description",
            "placeholder": "example",
            "label": "Introduce a description for your image",
            "value": "",            
            "validations": [
                {
                    "type": "required",
                    "message": "This field is required"
                },
                {
                    "type": "minLength",
                    "value": 5,
                    "message": "The term must be of min 5 letters"
                },
                {
                    "type": "maxLength",
                    "value": 120,
                    "message": "The term must be max of 120"
                }
            ],
            "icon": "comment"
        }
    ]
}
