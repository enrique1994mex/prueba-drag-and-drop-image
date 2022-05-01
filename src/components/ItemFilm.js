import { Row, Col, Image, Divider } from 'antd';
import { StarOutlined } from '@ant-design/icons';
export default function ItemFilm({ title, average, poster, release, overview }) {
    return (
        <>
            <Row>
                <Col span={24}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <h2 style={{ fontSize: '2em' }}>{title}</h2>
                        <div>
                            <p style={{ fontSize: '2em', display: 'inline' }}>{average}/10</p>
                            <StarOutlined style={{ color: '#F5F235 ', fontSize: '2em' }} />
                        </div>
                    </div>
                </Col>
                <Col span={6}>
                    <Image width={100} src={`https://image.tmdb.org/t/p/w500/${poster}`}
                        alt="Movie images"
                    />
                </Col>
                <Col span={18}>
                    <p>{overview}</p>
                    <h3>Release date: {release}</h3>
                </Col>
            </Row>
            <Divider />
        </>
    )
}