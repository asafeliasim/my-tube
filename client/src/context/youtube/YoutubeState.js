import React,{useReducer} from 'react';
import youtubeContext from './youtubeContext';
import youtubeReducer from './youtubeReducer';
import {
    SEARCH_VIDEOS,
    CLEAR_VIDEOS,
    SET_LOADING
} from '../types';

var youTubeApi;
if(process.env.NODE_ENV !== 'production'){
    youTubeApi = process.env.REACT_APP_YOU_TUBE_API;
}else{
    youTubeApi = process.env.YOU_TUBE_API;
}
const YoutubeState = props => {
    
    const initialState = {
        videos: [],
        video: {},
        loading: false
    };

    const [state,dispatch] = useReducer(youtubeReducer,initialState);

    const setLoading = () => dispatch({type: SET_LOADING});

    const searchVideos = async text => {
        console.log(youTubeApi);
        
        setLoading();
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${youTubeApi}&type=video&q&type=video&q=${text}`)
                .then((response)=> response.json())
                .then((responseJson)=>{
                    dispatch({
                        type: SEARCH_VIDEOS,
                        payload: responseJson.items
                    });
                })
                .catch((error)=>{
                    console.error(error);
                });
    };

    const clearVideos = () => {
        dispatch({type: CLEAR_VIDEOS});
    };

    return <youtubeContext.Provider 
                value={{
                    videos: state.videos,
                    searchVideos,
                    clearVideos
                }}
            >
            {props.children}
            </youtubeContext.Provider>

}

export default YoutubeState;