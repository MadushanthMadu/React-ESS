import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from 'react';

import { WidgetAlign } from '../../Enums/enums';
import { Grid } from '@mui/material';

export const InputField = ({
    Placeholder,
    Width,
    alignment = WidgetAlign.center
}) => {
    const [showPassword, setShowPassword] = React.useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return(
        <Grid container justifyContent={alignment}>
            <TextField
                type={showPassword ? 'text' : 'password'}
                id="filled-adornment-password"
                placeholder={Placeholder}
                style={{
                    width: Width
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment>
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                style={{
                                    margin: '0px 0px 0px 0px'
                                }}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),

                    startAdornment: (
                        <InputAdornment>
                            <AccountCircle
                            position="start" 
                            style={{
                                margin: '0px 10px 0px 5px',
                                padding: '5px',
                                borderRadius: '5px',
                                backgroundColor: 'white'
                            }}/>
                        </InputAdornment>
                    )
                }}
                variant="filled"
            />
        </Grid>
    )
}