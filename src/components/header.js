import React, { useState } from "react";
import "./header.css";
import logo from "../assets/images/logo#1.png";
import { Input, Modal, Form, Button } from "antd";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const [visible, SetVisible] = useState(false);
    const onFinish = (values) => {
        console.log(values)
        }
        const navigate =useNavigate();
        
    
    
    return (
        <>
            <Modal
                visible={visible}
                width="40%"
                onOk={() =>SetVisible(false)} 
                onCancel={() =>SetVisible(false)}>
            
                <h1>Sign in form</h1>

                <Form onFinish={onFinish}>
                    <Form.Item label="Email" name="email" rules={[{ required: "true", type: "email" }]}>
                        <Input type="email" />
                    </Form.Item>
                    <Form.Item label="Password" name="password" rules={[{ required: true }]}>
                        <Input type="password" />
                    </Form.Item>
                    <Button htmlType="submit" onClick={() => { localStorage.setItem("userLogedIn", true); navigate("/dashboard/Newtour"); }}>Login </Button>




                </Form>
            </Modal>
            <div className="header-div">
                <div className="logo">
                    <img src={logo}></img>
                    <div className="Navbar">
                        <a href="/home">Home</a>
                        <a href="/signup">Sign up</a>
                        <a href="#" onClick={()=>SetVisible(true)}>Sign in</a>
                        <a href="/aboutus">About us</a>
                        <a href="/contactus">Contact us</a>
                        <a href="/gallery">Gallery</a>
                    </div>
                </div>
                <div>

                </div>





            </div>
        </>
    )


}

export default Header;