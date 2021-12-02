import React from "react";
import "./home-layout.css";
import Header from "./header";
import Footer from "./footer";
import "../components/header.css";



const HomeLayout=({children})=>{
return(
<div className="home-container">
<Header></Header>
<div style={{height:"90vh"}}>
{children}
</div>
<Footer></Footer>


</div>

)



}
export default HomeLayout;