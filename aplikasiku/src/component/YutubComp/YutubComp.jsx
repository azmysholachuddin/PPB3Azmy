import React from "react";
import './YutubComp.css';

const YutubComp = (props) => {
    return  (
        <div className="youtube-wrapper">
            
            <div className="img-thumb">
                <img src="https://wallpaperaccess.com/full/1886121.jpg" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title"> {props.title}</p>
            <p className="desc"> {props.desc}</p>
        </div>
    )
}

export default YutubComp;