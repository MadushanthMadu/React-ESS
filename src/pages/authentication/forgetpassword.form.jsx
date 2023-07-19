import { WidgetAlign } from '../../enums/enums';
import theme from '../../themes/theme';
import { Heading } from '../../components/heading-component/heading.component';
import { InputField } from '../../components/inputfield-component/inputfield.common.component';
import { ButtonWidget } from '../../components/button-component/button.component';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';
import Validation from '../../shared/validation';
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export const ForgetPassword = () => {
    const [values, setValues] = useState ({
        email:''
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
        {/* Back */}
        <Link to="/login">
            <button className='backbtn'>
                <ArrowBackIosNewIcon style={{fontSize:'11px', fontWeight:'400', marginRight:'3px'}}/>
                Back
            </button>
        </Link>

        {/* Heading */}
        <Heading 
            type='h2'
            title='Reset your password'
            description="Enter your user account's verified email address and we will send you a password reset"
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

        {/* Submit Button */}
        <ButtonWidget 
            Width = '100%'
            text = 'Reset password'
        />

        </form>
    </CssVarsProvider>
    )
}