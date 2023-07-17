import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { WidgetAlign } from '../../Enums/enums';
import { Grid } from '@mui/material';
import theme from '../../Themes/theme.jsx';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';

const StyledIconContainer = styled('div')(({ theme }) => ({
    margin: '0px 10px 0px 3px',
    padding: '5px',
    borderRadius: '5px',
    backgroundColor: 'white',
    lineHeight: 0
}));
  
const StyledIcon = ({ component : Component }) => {  
    return (
      <StyledIconContainer>
        <Component style = {{
            height : '3vh',
            width : '3vh'
        }} 
        />
      </StyledIconContainer>
    );
};

export const InputField = ({
    onchange,
    disabled = false,
    defvalue,
    errortext,
    type,
    label,
    placeholder,
    width = '150px',
    icon,
    alignment = WidgetAlign.center
}) => {

    return(
        <Box
            sx={{
                display : 'flex',
                alignItems : 'center',
                '& > :not(style)' : { m: 1 },
            }}
        >
            <Grid container justifyContent={alignment}>
                <InputLabel for={label} className='inputlabel'>
                    {label}
                </InputLabel>

                <TextField
                    type = {type}
                    placeholder = {placeholder}
                    style = {{
                        width : width
                    }}
                    InputProps = {{
                        startAdornment: (
                            <InputAdornment position='start'
                            style={{
                                color : errortext !== undefined ? theme.vars.palette.error.main : theme.vars.palette.primary.main
                            }}>
                                <StyledIcon component={icon} />
                            </InputAdornment>
                        ),
                        style: { color: errortext !== undefined ? theme.vars.palette.error.main : theme.vars.palette.tertiary.main },
                    }}
                    defaultValue = {defvalue}
                    variant = "filled"
                    className = "textfield"
                    name={label}
                    disabled = {disabled}
                    onChange={onchange}
                    error = {errortext !== undefined}
                    helperText = {errortext}
                    {...(errortext !== undefined ? {focused : true} : {})}
                />
            </Grid>
        </Box>
    )
}