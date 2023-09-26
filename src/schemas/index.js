import * as Yup from "yup";

export const formSchema = Yup.object({
    email: Yup.string().email().required("Please enter the email"),
    fullName: Yup.string().min(2).required("Please enter the name"),
    blockName: Yup.string().required("Please select the block"),
    time: Yup.string().required("Please enter the time"),
    notes: Yup.string().min(2).required("Please enter the notes"),
});
