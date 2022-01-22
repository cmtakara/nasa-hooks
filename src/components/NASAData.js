
// import React from 'react';

import {useState} from 'react'
import Heart from "react-heart"


//in class components, we access props using this.props
// in hookes, we don't use this, we just access directly
// but we need to import it

const NASAData = (props) => {
    const [active, setActive] = useState(false)
    console.log('we are in NASAData', props)
    return (
        <div className='nasa-data' key={props.item.data[0].nasa_id}>
        <h3>{props.item.data[0].title}</h3>
        <p>Location: {props.item.data[0].location}</p>
        <p>Created: {props.item.data[0].date_created}</p>
        <img className='nasa-img' src={props.item.links?.[0].href} alt="" />
        <p>Description: {props.item.data[0].description}</p>
        <div className="heart">
        <Heart isActive={active} onClick={() => setActive(!active)}/> 
        {!active ? <p>click the heart to like</p> : ''}
        </div>
    </div>
    );
}



export default NASAData;
