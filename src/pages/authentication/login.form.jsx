import { WidgetAlign } from '../../enums/enums';
import theme from '../../themes/theme';
import { Heading } from '../../components/heading-component/heading.component';
import { PasswordField } from '../../components/inputfield-component/inputfield.password.component';
import { InputField } from '../../components/inputfield-component/inputfield.common.component';
import { ButtonWidget } from '../../components/button-component/button.component';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';
import Validation from '../../shared/validation';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
    const [values, setValues] = useState ({
        email:'',
        required:''
    })

    const [errors, setErrors] = useState({})

    function handleinput(event) {
        const newObj = {...values, [event.target.name]: event.target.value}
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
            validationkey='email'
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
            placeholder = 'Your password here'
            width = '100%'
            alignment = { WidgetAlign.left }
            onchange = { handleinput }
            errortext = { errors.required }
        />

        {/* Forget Password */}
        <Link to="/forget_password" style={{textDecoration: 'none'}}>
            <Typography
                variant = 'p'
                color = {theme.vars.palette.primary.main}
                style = {{
                    cursor : 'pointer' ,
                    display : 'grid' ,
                    justifyContent : 'end'
                }}
            >
                Forget password?
            </Typography>
        </Link>

        {/* Submit Button */}
        <ButtonWidget 
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