import React,{useContext} from 'react';
import AuthContext from '../../context/auth/authContext';
import VideoContext from '../../context/videos/videoContext';
const UserVideoItem = ({video})=> {
    const authContext = useContext(AuthContext);
    const {user} = authContext;
    const {_id} = user;
    const {videoId,title,favorite} = video;
    const videoContext = useContext(VideoContext);
    const {deleteVideo} = videoContext;

    const onDelte = () => {
        var obj = {
            v_id:video._id,
            u_id: _id
        }
        deleteVideo(obj);
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