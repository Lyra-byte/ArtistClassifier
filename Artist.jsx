import React from 'react'

const Artist = (props) => {
    const { name, score, url } = props;
    let percentageScore = (parseFloat (score*100)) .toFixed (2)
        return (
        <div className="artist">
            <h1>Artist: {name}</h1>
            <p>Confidence Score: {percentageScore}%</p>
            <a href={url} target="_blank">See more of this artist</a>
        </div>
    )
}

export default Artist;
