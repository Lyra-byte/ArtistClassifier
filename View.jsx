import React from 'react'

const View = (props) => {
    console.log(props)

    const { type, title, renderedView } = props;

    return (
        <div className={type + "-container"}>
            <div className="title">{title}</div>
            <div className="rendered-view">
                {renderedView}
            </div>
        </div>
    )
}

export default View
