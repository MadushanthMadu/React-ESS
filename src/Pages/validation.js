export default function Validation(values) {
    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,5}$/;
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

    if(values.name === "") {
        errors.name = "Name is Required";
    }

    if(values.email === "") {
        errors.email = "Email is Required";
    } else if(!email_pattern.test(values.email)) {
        errors.email = "Email didn't match"
    }

    if(values.password === "") {
        errors.password = "Password Required";
    } else if(!password_pattern.test(values.password)) {
        errors.password = "Password is weak"
    }

    return errors;
}