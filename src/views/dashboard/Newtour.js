import React from "react";
import Dashboardlayout from "../../components/dashboardlayout";
import { DatePicker, Form,Input,Space,Button } from "antd";
const Newtour =()=>{
const onFinish=(values)=>{
console.log(values)

}

    return(
        
<Form onFinish={onFinish}>
<Form.Item name="title" label="Title" rules={[{ required: true}]}>
    <Input/>
    </Form.Item>

    <Form.Item name="description" label="description" rules={[{ required: true}]}>
        <Input.TextArea/>
        </Form.Item>


        <Space>
        <Form.Item name="" label="Date scheduled" rules={[{ required: true}]}>
<DatePicker/>
</Form.Item>

<Form.Item name="" label="Due date" rules={[{ required: true}]}>
<DatePicker/>
</Form.Item>
        </Space><br/><br/>
{/* <h1> New Tour</h1> */}
<Button htmlType="submit" type="primary"> 
Register Now
</Button>
</Form>


    

    )
}


export default Newtour;