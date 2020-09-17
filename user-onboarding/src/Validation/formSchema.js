import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string().required("Name is required").min(2, "Name must be 2 characters or longer"),
    email: yup.string().email("Must be a valid email address").required("Email is required"),
    password: yup.string().required("Password is required")
        .min(3, "Password must be 3 characters or longer"),
    tos: yup.boolean().oneOf([true], "You must agree to our terms of service")
})