import * as Yup from "yup";

const getCharacterValidationError = (string) => {
    return `Your password must have at least 1 ${string} character`;
};

export const loginSchema = Yup.object({
    email: Yup.string().email().required("Please enter the email"),
    password: Yup.string().required("Please enter the password").min(6, "Password must have at least 6 characters").matches(/[0-9]/, getCharacterValidationError("digit"))
        .matches(/[a-z]/, getCharacterValidationError("lowercase")),
});
