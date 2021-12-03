import React from "react";
import "./home.css"
import HomeLayout from "../components/home-layout";
import Footer from "../components/footer";
const Home=()=>{
return(
    <HomeLayout>
        <div className="home-container">
    <h1>Rwanda Booking Tours</h1>
    <div className="button-div">
<p>When you travel with Beautiful Rwanda Tours you’ll travel with confidence, knowing your journey has been meticulously planned by professional tour specialists.
Your journey begins the moment you contact our friendly and knowledgeable destination specialists, who are here to answer all your questions and reserve your special tour. </p>
<button>Book Now!</button>
    </div>
    </div>
    
        
    
    </HomeLayout>
  

   

   
)

}
export default Home;