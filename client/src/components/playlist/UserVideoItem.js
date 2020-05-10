import React,{useContext} from 'react';
import VideoContext from '../../context/videos/videoContext';
const UserVideoItem = ({video})=> {
    
    const {videoId,title,favorite} = video;
    const videoContext = useContext(VideoContext);
    const {deleteVideo} = videoContext;

    const onDelte = () => {
        deleteVideo(videoId);
    }
    // if favorite == true --> icon of star
    return (
        <div className='card bg-light'>
            <h3>{title}</h3>
            <iframe title="video-frame" width="1000" height="300" src={`http://www.youtube.com/embed/${videoId}`} frameBorder="0" allowFullScreen></iframe>
            <div className="mt-2">
                <button className="btn btn-danger btn-sm" onClick={onDelte}>Delete</button>
                {favorite && (<button className="btn btn-action btn-sm">favorite</button>)}
            </div>
        </div>
    )
}
export default UserVideoItem;