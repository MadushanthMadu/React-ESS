import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import { LoginForm } from './login-form';

class Login extends Component {
    render() {
        return (
            <Box sx={{ flexGrow: 1 }} >
                <Grid container>
                    <Grid item md={6} sm={12} xs={12}>
                    </Grid>

                    <Grid
                    item
                    md={6}
                    sm={12}
                    xs={12}
                    style = {{ 
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'nowrap',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        minHeight: '100vh'
                    }}>
                        <div
                        className='Login'
                        style = {{ 
                            width:'50%'
                        }}>
                            <LoginForm />
                        </div>
                    </Grid>

                    {/* <Grid item sm={12}>
                        <LoginForm />
                    </Grid> */}
                </Grid>
            </Box>
        )
    }
}

export default Login;