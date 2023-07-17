export default function Validation(values) {
    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,5}$/;
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

    if(values.required === "") {
        errors.required = "Required";
    }

    if(values.email === "") {
        errors.email = "Email is required";
    } else if(!email_pattern.test(values.email)) {
        errors.email = "Email didn't match"
    }

    if(values.password === "") {
        errors.password = "Password required";
    } else if(!password_pattern.test(values.password)) {
        errors.password = "Weak Password"
    }

    return errors;
}