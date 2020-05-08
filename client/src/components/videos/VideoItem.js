import React from 'react';
import PropTypes from 'prop-types';
import {FaStar} from 'react-icons/fa';

const VideoItem = ({video}) => {
    
    return (
    <div className="card grid-2">
        <div className="all-center">
            <iframe title="video-frame" width="300" height="300" src={`http://www.youtube.com/embed/${video.id.videoId}`} frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className="all-center">
                <h3>{video.snippet.title}</h3>
                <div className="all-center m-2">
                    <p>{video.snippet.description}</p>
                    <a href={`http://www.youtube.com/embed/${video.id.videoId}`} className="btn btn-dark my-1">Visit on youtube</a>
                    <button className="btn btn-action">Add to playlist</button>
                    <button className="btn btn-light text-dark"><FaStar style={starStyle}/> add to favorite</button>
                </div>
        </div>    
    </div>
    
    )
}
const starStyle = {
    color: '#e1b12c',
    width : '15px',
    height: '15px'
}
VideoItem.propTypes = {
    video: PropTypes.object.isRequired
};
export default VideoItem;