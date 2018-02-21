import React from 'react';
import './PageTitle.css';

const pageTitle = (props) => {
    //You can assign a different color by passing down props and adjust the top margin of the component based on what page it is on
    
    return (
        <div style={{color: props.color}} className="PageTitle">
            <h1 style={{marginTop: props.marginTop}}>{props.title}</h1>
            <h5>{props.subTitle}</h5>
        </div>


    )
}

export default pageTitle;
