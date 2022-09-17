import { useEffect, useState } from "react";
import axios from "axios"
import { Card, Col, Row } from 'antd';
import { Link } from "react-router-dom";

function Home() {
    const [data, setData] = useState()

    useEffect(() => {
        const getData = async () => {
            try {
                let response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
                console.log(response)
                setData(response.data)
            } catch (error) {
                console.log(error)    
            }
        }
        getData()
    },[])
    return (
        <div>
             <div className="site-card-wrapper">
                <Row gutter={[16, 16]}>
                    {data?.map((i) => (
                        <Col span={8} key={i.id}>
                            <Link to={`/posts/${i.id}`}>
                                <Card title={i.title}>
                                    {i.body}
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default Home;