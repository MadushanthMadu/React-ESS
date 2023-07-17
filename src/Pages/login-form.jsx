import { WidgetAlign } from '../Enums/enums';
import theme from '../Themes/theme';
import { Heading } from '../Components/Headings/heading';
import { PasswordField } from '../Components/inputfield-component/inputfield-password-component';
import { InputField } from '../Components/inputfield-component/inputfield-common-component';
import { ButtonWidget } from '../Components/button-component/button.component';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';
import Validation from './validation';

const forgetpassword = () => {
    console.log('Forget Password')
};

// const Submit = () => {
//     console.log('Login Submitted')
// };

export const LoginForm = () => {
    const [values, setValues] = useState ({})

    const [errors, setErrors] = useState({})

    function handleinput(event) {
        const newObj = {...values, [event.target.name.toLowerCase()]: event.target.value}
        setValues(newObj);
    }

    function handleValidation(event) {
        event.preventDefault();
        setErrors(Validation(values));
    }

    return(
    <CssVarsProvider theme={theme}>
        {/* Heading */}
        <Heading 
            type='h2'
            title='Welcome Back!'
            description='Start managing your finance faster and better'
        />

        <form onSubmit={handleValidation}>

        {/* Email */}
        <InputField 
            label = 'Email'
            type = 'text'
            placeholder = 'you@example.com'
            icon = { EmailIcon }
            width = '100%'
            alignment = { WidgetAlign.left }
            onchange = { handleinput }
            errortext = { errors.email }
        />

        {/* Password */}
        <PasswordField 
            placeholder = 'At least 8 characters'
            width = '100%'
            alignment = { WidgetAlign.left }
            onchange = { handleinput }
            errortext = { errors.password }
        />

        {/* Forget Password */}
        <Typography
            variant = 'p'
            color = {theme.vars.palette.primary.main}
            style = {{
                cursor : 'pointer' ,
                display : 'grid' ,
                justifyContent : 'end'
            }}
            onClick = {forgetpassword}
        >
            Forget password?
        </Typography>

        {/* Submit Button */}
        <ButtonWidget 
            // callback = {Submit}
            Width = '100%'
            text = 'Login'
        />

        </form>

        {/* Version */}
        <Typography
            variant = 'p'
            color = {theme.vars.palette.tertiary.main}
            style = {{
                display : 'grid' ,
                justifyContent : 'center'
            }}
        >
            Live v1.0.0
        </Typography>
    </CssVarsProvider>
    )
}