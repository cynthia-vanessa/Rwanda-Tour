import React from "react";
import { Routes, Route } from "react-router";
import Aboutus from "../views/aboutus";
import Contactus from "../views/contactus";
import Gallery from "../views/gallery";
import Home from "../views/home";
import Signin from "../views/signin";
import Signup from "../views/signup";
import Tours from "../views/tours";
import Newtour from "../views/dashboard/Newtour";
import Dashlayout from "../components/dashboardlayout";
import Alltours from "../views/dashboard/Alltours";
// import Alltours from "../views/Alltours";
const Index=()=>{
return(
    <>
<Routes>
<Route path="/home" element={<Home/>}></Route>
<Route path="/aboutus" element={<Aboutus/>}></Route>
<Route path="/contactus" element={<Contactus/>}></Route>
<Route path="/signin" element={<Signin/>}></Route>
<Route path="/signup" element={<Signup/>}></Route>
<Route path="/gallery" element={<Gallery/>}></Route>
<Route path="/tours" element={<Tours/>}></Route>
<Route path="/dash/Newtour" element={<Newtour/>}></Route>
{/* <Route path="/dash/Alltours" element={<Alltours/>}></Route> */}

</Routes>
<Dashlayout>
    <Routes>
    <Route path="/dashboard/Newtour" element={<Newtour/>}/>  
    <Route path="/dashboard/Alltours" element={<Alltours/>}/>  
    </Routes>
</Dashlayout>

</>

)





}
export default Index;