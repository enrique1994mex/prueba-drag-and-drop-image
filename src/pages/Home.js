import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchInfoActor } from '../redux/actions/actor';

const { Dragger } = Upload;

export default function Home() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const props = {
        name: 'file',
        accept: 'image/png, image/jpeg, image/jpg',
        action: 'https://whois.nomada.cloud/upload',
        headers: {
            Nomada: "M2VjNWRkNGEtOGFkYS00ODI1LTkwZWMtYTY0MDQ0ZDk3M2Zm"
        },
        onChange(info) {
            const { status } = info.file;
            if (status === 'done') {
                let actorName = info.file.response.actorName;
                dispatch(fetchInfoActor(actorName));
                navigate("/actor");
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ textAlign: 'center', fontSize: '3em' }}>What is this actor?</h1>
            <div style={{height: '300px', margin: '0 20px'}}>
                <Dragger {...props} navigate={navigate} listType="picture" style={{ height: '400px', maxWidth: '800px' }}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint" style={{margin: '0 30px'}}>
                        Select the photo of a famous actor to find out who he/she is and what movies he/she has appeared in.
                    </p>
                </Dragger>
            </div>
        </div>
    )
}