import React, {Component} from 'react';

const API = 'AIzaSyCJv2eNDsq-OZk1iD2QF4F-cyTQGORrii4';
const channelID = 'UC-UNeY1c9yozCwsUHyqBIbw';
const result = 10;
 

const tubeURL =`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCJv2eNDsq-OZk1iD2QF4F-cyTQGORrii4&type=video&q=eminem`;

class Youtube extends Component {
    render(){
        console.log(tubeURL);
        return(
            <div>

            </div>
        )
    }
}

export default Youtube;