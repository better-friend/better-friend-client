import React from 'react';
import axios from 'axios';
import { Route, Redirect, withRouter } from 'react-router-dom';

const PrivateRoute = ({ component: Component, render ,...rest }) => {
    console.log('component:', Component, render, rest)
    const toRender = Component ? <Component {...rest} /> : render(rest);
    return (
        <Route {...rest} render={() => {
            if(localStorage.getItem('token')) {
                axios.create({
                    headers: {
                        'Authorization': localStorage.getItem('token')
                    }
                })
                return toRender
            } else {
            return <Redirect to="/login"/>
            }
            }}
        />
    )   
}


export default withRouter(PrivateRoute);