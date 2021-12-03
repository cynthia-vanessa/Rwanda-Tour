import  React  from "react";
import Homelayout from "../components/home-layout";
import SingleTour from "../components/singleTour";
import Tourscard from "../components/Tourscard";
import allToursData from "../assets/constant/tours.json";
// import "./aboutus.css";
// import "../components/tourcard";




const tours=()=>{
    return(
<Homelayout>
<div className="tours-categories">
<div className="tours-container">
{
    allToursData.map((data)=> (<Tourscard data={data}/>))
}

</div>
</div>
</Homelayout>
    )
}
export default tours;