import React, { useState } from 'react'
import axios from 'axios';
import Artist from './Artist';

const FunctionalView = () => {
    const [imageUrl, setImageURL] = useState('');
    const [image, setImage] = useState('');

    const [results, setResults] = useState([]);
    const [artistsInfo, setInfo] = useState({});
    const [isloading, toggleLoading] = useState(false);

    const apiRequest = (e) => {
        e.preventDefault();
        toggleLoading(true);
        setTimeout(() => {
            axios.get('/index')
            .then((response)=> {
                setResults(response.data.results)
                setInfo(response.data.artist_info)
                toggleLoading(false)
            })

        },2000)
        
    };

    const uploadImage = (e) => {
        if (e.target.files.length > 0) {
            setImageURL(URL.createObjectURL(e.target.files[0]));
            setImage(e.target.files[0])
        }
    }

    const artists = results.map((artist) =>{
        let artistInfo = artistsInfo[artist[0].toLowerCase()];
    
        if (artistInfo) {
            return (
                <Artist
                    name={artistInfo.NAME}
                    url={artistInfo.LINK}
                    score={artist[1]}
                />)
            } 
        })
    let outputView = ''
    if (isloading) {
        outputView = (
            <div className="output loading" >
                <div>
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    <p>Loading...</p>    
                </div>        
            </div>
        )

    } else {
        outputView = (
            <div className="output">
                {artists[0]}
                {artists[1]}
                {artists[2]}
                {artists[3]}
            </div>

        )
    }

    return (
        <div className="functional-view">
            <form className="import" onSubmit={apiRequest} >
                <input type="file" onChange={uploadImage} />
                <img src={imageUrl} />
                <button type="submit" >Submit</button>
            </form>
            {outputView}

        </div>
    )
}

export default FunctionalView;
