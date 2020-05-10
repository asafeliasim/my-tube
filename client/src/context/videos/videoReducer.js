import{
    ADD_VIDEO,
    DELETE_VIDEO,
    VIDEO_ERROR
}from '../types';

export default (state,action)=> {
    switch(action.type){
        case ADD_VIDEO:
            return{
                ...state,
                videos:[...state.videos,action.payload]
            };
        case DELETE_VIDEO:
            return{
                ...state,
                videos: state.videos.filter(video => video.videoId !== action.payload)
            };
        case VIDEO_ERROR:
            return{
                ...state,
                error: action.payload
            };    
        default:
            return state;
    }
}