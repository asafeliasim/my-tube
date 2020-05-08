import {
    SEARCH_VIDEOS,
    CLEAR_VIDEOS,
    SET_LOADING 
} from '../types';

export default (state,action) => {
    switch(action.type){
        case SEARCH_VIDEOS:
            return {
                ...state,
                videos: action.payload,
                loading: false
            };
        case SET_LOADING:
            return{
                ...state,
                loading: true,
            };        
        case CLEAR_VIDEOS:
            return {
                ...state,
                videos:[],
                loading:false
            };  
        default:
            return state;
    }
}