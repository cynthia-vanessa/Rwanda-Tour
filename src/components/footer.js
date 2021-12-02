import React from "react";
import "./footer.css";
import{TwitterOutlined } from '@ant-design/icons';
import{InstagramOutlined } from'@ant-design/icons';
import{FacebookOutlined } from '@ant-design/icons';
const Footer=()=>{
return(
<div className="footer-container">


<div className="words">
<div className="more-words">
   <h3>RWANDA BOOKING TOURS</h3>
<h4>Tel:+250788590862</h4>
<h5>rwandabookingtours@gmail.com</h5>
<h6>KK 387 St</h6>
</div>
<div className="words2">

<h2><a href="/aboutus">About us</a></h2>


<h3><a href="/contactus">Contact us</a></h3>

<h4><a href="/gallery">Gallery</a></h4>

<h5><a href="/signup">Sign up</a></h5>
<div className="icons1">
<div className="icons">
<TwitterOutlined />

</div>
<div className="icons2">
   <InstagramOutlined/>
</div>
<div className="icons3">
<FacebookOutlined/>
</div>
</div>
</div>

<div></div>
</div>
    
</div>

)


}
export default Footer;