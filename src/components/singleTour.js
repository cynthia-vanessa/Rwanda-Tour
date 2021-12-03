import React from "react";

const singleTour = ({ data }) => {
    return (
        <div className="singletour-container">
            <h1>{data.title}</h1>

            <img src={data.images} />
                <p>{data.description [0]}</p>

            

                <div><h2>Date:{data.dateScheduled}</h2></div>
                <div> <h2> Available seats: 25/40</h2></div>

        </div>
    )
}
export default singleTour;