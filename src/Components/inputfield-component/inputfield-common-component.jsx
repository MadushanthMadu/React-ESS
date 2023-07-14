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
    Disabled = false,
    Error = false,
    DefValue,
    ErrorText = Error ? 'Error' : '',
    Type,
    Label,
    Placeholder,
    Width = '150px',
    Icon,
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
                <InputLabel htmlFor="input-with-icon-adornment" className='inputlabel'>
                    {Label}
                </InputLabel>

                <TextField
                    type = {Type}
                    placeholder = {Placeholder}
                    style = {{
                        width : Width
                    }}
                    InputProps = {{
                        startAdornment: (
                            <InputAdornment position='start'
                            style={{
                                color : Error ? theme.vars.palette.error.main : theme.vars.palette.primary.main
                            }}>
                                <StyledIcon component={Icon} />
                            </InputAdornment>
                        ),
                        style: { color: Error ? theme.vars.palette.error.main : theme.vars.palette.tertiary.main },
                    }}
                    defaultValue = {DefValue}
                    variant = "filled"
                    className = "textfield"
                    disabled = {Disabled}
                    error = {Error}
                    helperText = {ErrorText}
                    {...(Error ? {focused : true} : {})}
                />
            </Grid>
        </Box>
    )
}