import React from 'react';
import './PageTitle.css';

const pageTitle = (props) => {
    return (
        <div className="PageTitle">
            <h1>{props.title}</h1>
            <h5>{props.subTitle}</h5>
        </div>


    )
}

export default pageTitle;
