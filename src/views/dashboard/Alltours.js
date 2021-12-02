import React from "react"
import userinfo from "../../assets/constant/userinfo.json"
import tours from "../../assets/constant/tours.json";
// import form { Form, Input} from 'antd';
import { Table, Tag,Space} from 'antd';
import {EyeOutlined} from "@ant-design/icons";
import {DeleteOutlined } from "@ant-design/icons";
import{EditOutlined  } from "@ant-design/icons";
const Column =[
    {
        title:'Title',
        dataIndex:'title',
        key:'title',

    },
    {
    title:'Date Scheduled',
    dataIndex:'dateScheduled',
    key:'dateScheduled',
},
{
    title:'Price ($)',
    dataIndex:'price',
    key:'price',

},
{
    title:'Seats',
    dataIndex:'seats',
    key:'seats',
},

{
    title:'Due date',
    dataIndex:'dueDate',
    key:'dueDate',
},

{
    title:'Action',
    dataIndex:'action',
    render:(text,record)=>(
    <Space size="middle">
     <a><EyeOutlined /></a> 
     <a><EditOutlined /></a>  
    <a><DeleteOutlined /></a>
  
    
    </Space>
    )
},
]
const Column1 =[
    {
        title:'First-name',
        dataIndex:'first-name',
        key:'first-name',

    },
    {
    title:'Last-name',
    dataIndex:'last-name',
    key:'last-name',
},
{
    title:'Phone',
    dataIndex:'phone',
    key:'phone',

},
{
    title:'Address',
    dataIndex:'address',
    key:'address',
},
{
    title:'Email',
    dataIndex:'email',
    render:(text, record) =>(
<Space size="middle">
<a style={{color:"green"}}>Accept</a>
<a style={{color:"red"}}>Decline</a>
</Space>

    )
},

]
const Alltours=()=>{
    return(
        <>

 <Table columns={Column} dataSource={tours} /> 
  <Table columns={Column1} dataSource={userinfo} />
          
     </>   

       
    )
}

export default Alltours;