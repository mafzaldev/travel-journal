import React from "react";
import locationSign from "../Images/location.png";

export default function Card(props) {
    return (
        <div>
            <div className="card">
                <div className="card--image">
                    <img src={props.locationImage} alt="" className="card--image__img" />
                </div>
                <div className="card--details">
                    <div className="card--location">
                        <span className="location--details"><img src={locationSign} alt="" className="locationSign--Image" /></span>
                        <span className="location--details country">{props.location}</span>
                        <span className="location--details maps"><a href={props.googleMapsUrl}>View on Google Maps</a></span>
                    </div>
                    <h1>{props.title}</h1>
                    <div className="time">
                        <span>{props.startDate}-</span>
                        <span>{props.endDate}</span>
                    </div>
                    <p>{props.description}</p>
                </div>
            </div>
            <hr />
        </div >
    )
}