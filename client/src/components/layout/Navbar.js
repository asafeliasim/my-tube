import React,{Fragment,useContext} from 'react';
import PropTypes from 'prop-types';
import {FaYoutube} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import {FiLogOut} from 'react-icons/fi';

const Navbar =({title})=> {
    var authContext = useContext(AuthContext);
    const onLogout = ()=> {
        logout();
    };
    const {isAuthenticated,logout}= authContext;

    const authLinks = (
        <Fragment>
            <li>
                    <Link to='/home'>Home</Link>
            </li>
            <li>
                    <Link to='/playlist'>PlayList</Link>
            </li>
            <li>
                <a onClick={onLogout} href="/">
                    <FiLogOut/> <span className="hide-sm">Logout</span>
                </a>
            </li>
        </Fragment>
    )
    const guestLinks = (
        <Fragment>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
        </Fragment>
    )
    return (
        <div className="navbar bg-primary">
            <h1><FaYoutube style={logoStyle}/> {title} </h1>    
            <ul>
             {isAuthenticated ? authLinks : guestLinks}   
                
            </ul>
        </div>

    )
}
const logoStyle = {
    marginLeft: '10px',
    height: '28px'
}
Navbar.propTypes={
    title: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: 'MyTube app'
}

export default Navbar;
