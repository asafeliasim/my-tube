import React, {useContext,useEffect} from 'react';
import Search from '../videos/Search';
import Videos from '../videos/videos';
import AuthContext from '../../context/auth/authContext';

const Home =()=> {
    const authContext = useContext(AuthContext);
    
    useEffect(()=>{
        authContext.loadUser();
        // eslint-disable-next-line
    },[]);

    return (
        <div>
            <Search />
            <Videos />
        </div>
    )
}

export default Home;