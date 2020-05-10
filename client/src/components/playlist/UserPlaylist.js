import React,{Fragment,useContext,useEffect} from 'react';
import AuthContext from '../../context/auth/authContext';
import Spinner from '../layout/Spinner';
import UserVideoItem from './UserVideoItem';

const UserPlayList =()=>{
    var authContext = useContext(AuthContext);
    var {loadUser,isAuthenticated,user} = authContext;
    
    useEffect(()=>{
        loadUser();
    },[])          
    return(
        <Fragment>
            {
                isAuthenticated ? user.videos.map(video=> <UserVideoItem video={video}/>): <h3>{Spinner}</h3>
            }
        </Fragment>
        )
        
    
}

export default UserPlayList;