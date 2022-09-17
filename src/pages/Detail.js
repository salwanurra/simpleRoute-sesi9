import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';

function Detail() {
    const [data, setData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const getData = async () => {
            try {
                let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                console.log(response)
                setData(response.data)
            } catch (error) {
                console.log(error)    
            }
        }
        getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div style={{width: '75%', margin: 'auto', display: 'flex', flexDirection:'column', justifyContent: 'center', height: '90vh'}}>
            <Breadcrumb>
                <Breadcrumb.Item href="/">
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item>Posts {data.id}</Breadcrumb.Item>
            </Breadcrumb>
            <h1>{data.title}</h1>
            <p>Oleh user: {data.userId}</p>
            <h2>{data.body}</h2>
        </div>
    )
}

export default Detail;