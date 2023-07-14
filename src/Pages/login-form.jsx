import { WidgetAlign } from '../Enums/enums';
import theme from '../Themes/theme';
import { Heading } from '../Components/Headings/heading';
import { PasswordField } from '../Components/inputfield-component/inputfield-password-component';
import { InputField } from '../Components/inputfield-component/inputfield-common-component';
import { ButtonWidget } from '../Components/button-component/button.component';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';

const forgetpassword = () => {
    console.log('Forget Password')
};

const Submit = () => {
    console.log('Login Submitted')
};

export const LoginForm = () => (
    <CssVarsProvider theme={theme}>
        {/* Heading */}
        <Heading 
            type='h2'
            title='Welcome Back!'
            description='Start managing your finance faster and better'
        />

        {/* Email */}
        <InputField 
            Label = 'Email'
            Type = 'email'
            Placeholder = 'you@example.com'
            Icon = { EmailIcon }
            Width = '100%'
            alignment = { WidgetAlign.left }
        />

        {/* Password */}
        <PasswordField 
            Placeholder = 'At least 8 characters'
            Width = '100%'
            alignment = { WidgetAlign.left }
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
            callback = { Submit }
            Width = '100%'
            text = 'Login'
        />

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