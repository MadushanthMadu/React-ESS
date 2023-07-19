import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Logo from '../../assets/images/Techserw-Logo.png'

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { ForgetPassword } from './forgetpassword.form';
import { LoginForm } from './login.form';

class Login extends Component {
    render() {
        return (
            <Box sx={{ flexGrow: 1 }} >
                <Grid container>
                    <Grid
                    item 
                    md={6} 
                    sm={0} 
                    xs={0}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'nowrap',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        minHeight: '100vh'
                    }}
                    >
                        <img
                            style = {{
                                width: '40%',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                display: 'flex'
                            }} 
                            src={Logo} 
                            alt='Techserw-Logo'
                        />
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
                            width:'65%'
                        }}>
                            <Router>
                                <Routes>
                                    <Route exact path='/login' element={< LoginForm />}></Route>
                                    <Route exact path='/forget_password' element={< ForgetPassword />}></Route>
                                </Routes>
                            </Router>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export default Login;