import React, {useContext} from 'react';
import VideoItem from './VideoItem.js';
import Spinner from '../layout/Spinner';
import YoutubeContext from '../../context/youtube/youtubeContext'; 
   
const Videos = () => {
    const youtubeContext = useContext(YoutubeContext);
    const {loading,videos} =  youtubeContext;
    
    if(loading){
        return <Spinner />
    }
    else{
        return <div style={videoStyle}>
            {
                videos.map((video)=>{
                    return <VideoItem key={video.id} video={video}/>
                })
            }
        </div>
    }
} 
const videoStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1,1fr)',
    gridGap: '1rem'
};

export default Videos;