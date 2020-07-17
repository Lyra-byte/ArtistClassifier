import React from 'react';

const Block = (props) => {
    const { style, link, description} = props;
    return (
        <div className="block">
            <h1>{style}</h1>
            <p>{description}</p>
            <img src={link} alt="image"></img>
        </div>
    )
}

export default Block;