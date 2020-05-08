import React,{Fragment} from 'react';
import spinner from './spinner.gif';

export const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner} 
            alt="loading..." 
            style={{width:'300px',margin:"auto",display:'block',color:'#273c75'}}/>
        </Fragment>
    )
}

export default Spinner