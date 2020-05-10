import React, {useReducer} from 'react';
import VideoContext from './videoContext';
import videoReducer from './videoReducer';
import axios from 'axios';
import {
    ADD_VIDEO,
    DELETE_VIDEO,
    VIDEO_ERROR
} from '../types';

const VideoState = props => {
    const initialState = {
        videos:[],
        error: null
    };

    const [state,dispatch] = useReducer(videoReducer,initialState);

    const addToUserPlayList = async video => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try{
            const res = await axios.post('/api/playlist',video,config);
            dispatch({
                type: ADD_VIDEO,
                payload: res.data
            });
        }catch(err){
            dispatch({
                type:VIDEO_ERROR,
                payload:err.response.msg
            })
        }
    };

    const deleteVideo = videoId => {
        dispatch({
            type: DELETE_VIDEO,
            payload: videoId

        })
    }
    return (
        <VideoContext.Provider
            value={{
                videos: state.videos,
                error: state.error,
                addToUserPlayList,
                deleteVideo
                
            }}
        >
            {props.children}
        </VideoContext.Provider>
    )
}

export default VideoState;