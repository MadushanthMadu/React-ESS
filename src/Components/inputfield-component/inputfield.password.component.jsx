import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React, {useState} from 'react';
import { WidgetAlign } from '../../enums/enums';
import { Grid } from '@mui/material';
import theme from '../../themes/theme.jsx';
import { styled } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import LockIcon from '@mui/icons-material/Lock';

const StyledIconContainer = styled('div')(({ theme }) => ({
    margin: '0px 10px 0px 3px',
    padding: '5px',
    borderRadius: '5px',
    backgroundColor: 'white',
    lineHeight: 0
  }));

  const StyledIcon = ({ component: Component }) => {  
    return (
      <StyledIconContainer>
        <Component style={{
            // color: theme.vars.palette.primary.main, 
            height: '3vh',
            width: '3vh'
        }} />
      </StyledIconContainer>
    );
};
  


export const PasswordField = ({
    validationkey = "required",
    errortext,
    onchange,
    placeholder,
    width = '150px',
    alignment = WidgetAlign.center
}) => {
    const [showPassword, setShowPassword] = useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return(
        <Grid container justifyContent={alignment} style={{paddingBottom:'24px'}}>
            <InputLabel for={validationkey} className='inputlabel'>
                Password
            </InputLabel>

            <TextField
                type = {showPassword ? 'text' : 'password'}
                placeholder = { placeholder }
                style = {{
                    width: width
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                style={{
                                    margin: '0px 0px 0px 0px',
                                }}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),

                    startAdornment: (
                        <InputAdornment position='start'
                        style={{
                            color : errortext !== undefined ? theme.vars.palette.error.main : theme.vars.palette.primary.main
                        }}>
                            <StyledIcon component={LockIcon} />
                        </InputAdornment>
                    )
                }}
                variant = "filled"
                name = { validationkey }
                onChange = {onchange}
                error = { errortext !== undefined }
                helperText = { errortext }
                {...(errortext !== undefined ? {focused : true} : {})}
            />
        </Grid>
    )
}