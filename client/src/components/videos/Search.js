import React, {  useState, useContext } from 'react';
import YoutubeContext from '../../context/youtube/youtubeContext';

const Search = () => {
    const youtubeContext = useContext(YoutubeContext);
    const [text,setText] = useState('');
    const {searchVideos,clearVideos,videos,setAlert}= youtubeContext;
    

    const onSubmit = e => {
        e.preventDefault();
        if(text===" "){
            setAlert("Please enter something","light");
        }else{
            searchVideos(text);
            setText('');
        }
    }
    const onChange = e => setText(e.target.value);     
    return (
            <div>
                <form  onSubmit={onSubmit} className="form">
                    <input 
                        type="text" 
                        name="text"
                        placeholder="search youtube videos..."
                        value={text}
                        onChange={onChange}
                        />
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/> 
                </form>
                { videos.length > 0 && (
                    <button className="btn btn-light btn-block" onClick={clearVideos}> Clear </button>
                )}
            </div>
        )
}

export default Search;