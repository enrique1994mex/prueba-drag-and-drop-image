import { useSelector } from "react-redux";
import { Row, Col, Image, Divider, Button, Spin, Alert } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import ItemFilm from '../components/ItemFilm';

const style = { display: 'flex', flexDirection: 'column', alignItems: 'center' };

export default function Actor() {

    let navigate = useNavigate();

    const { isLoading, infoActor, errorInfoActor } = useSelector((state) => state.actorReducer);

    const goBack = () => {
        navigate("/")
    }

    if (isLoading) {
        return (
            <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
                <Spin size="large" />
            </div>
        )
    } else if (errorInfoActor) {
        setTimeout(() => {
            navigate("/"); 
        }, 1500)
        return (
            <div  style={{ display: 'flex', justifyContent: 'center', height: '50vh', alignItems: 'center' }}>
                <Alert
                    message="Error"
                    description={errorInfoActor}
                    type="error"
                    showIcon
                />
            </div>
        )
    }

    return (

        <div style={{ maxWidth: '90%', margin: 'auto' }}>
            <Button onClick={goBack} type="primary" size="large" icon={<ArrowLeftOutlined />} style={{ margin: '2em 0' }}>Go back</Button>
            <Row gutter={16}>
                <Col span={24} md={8}>
                    <div style={style}>
                        <Image width={250} src={`https://image.tmdb.org/t/p/w500/${infoActor.profile_path}`}
                            alt="Image of actor"
                        />
                        <h2 style={{ fontSize: '2em' }}>{infoActor.name}</h2>
                        <p style={{ backgroundColor: '#F5D535', fontSize: '1.2em', padding: '5px 20px', borderRadius: '3px' }}>{infoActor.gender === 2 ? "Man" : "Woman"}</p> 
                        <p style={{ fontSize: '1.5em' }}>Popularity: {infoActor.popularity}</p>
                    </div>
                </Col>
                <Col span={24} md={16}>
                    <Divider />
                    <h1 style={{ fontSize: '2.5em' }}>Films:</h1>
                    <Divider />
                    {
                        infoActor.known_for?.map(film => (
                            <ItemFilm
                                key={film.id}
                                title={film.title}
                                average={film.vote_average}
                                poster={film.poster_path}
                                overview={film.overview}
                                release={film.release_date}
                            />
                        ))
                    }
                </Col>
            </Row>
        </div>
    )
}