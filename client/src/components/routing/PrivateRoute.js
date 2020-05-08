import React,{useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

// Standart to create a private router
const PrivateRoute = ({component: Component,...rest}) => {
    
    var authContext = useContext(AuthContext);
    const {isAuthenticated,loading} = authContext;

    return (
        <Route {...rest} render={props=> !isAuthenticated && !loading ? (
            <Redirect to='/login'/>
        ):(
            <Component {...props}/>
        )}/>
    )
}
export default PrivateRoute;
