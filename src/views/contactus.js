import React from "react";
import HomeLayout from "../components/home-layout";
// import "./home-layout.css";

const contactus = () => {
    return (
        <HomeLayout>
            <div className="display">
            <div className="contactus">
<h1>Contact us</h1>

<h2>Names</h2>
<input placeholder=""></input><br/><br/>
<h3>Phone</h3>
<input placeholder=""></input><br/><br/>
<h4>Email</h4>
<input placeholder=""></input>
<h5>Hurry up and book a Tours!</h5>
</div>
<div className="contactus2">
<h1> Our location </h1>
<div className="contactus3">
    
    <h2> Kigali, Kicukiro</h2>
    <h3>KK 389 St</h3>
    <h4>Tel:+250788590862</h4>
    <h5>Working Hours</h5>
    <h6>From Monday to Thursday at 08:00 a.m</h6>
    
</div>


</div>
</div>




            








        
        </HomeLayout>



    );
}
export default contactus;