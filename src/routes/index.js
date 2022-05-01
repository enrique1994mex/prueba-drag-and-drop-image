import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Actor from '../pages/Actor';

export default function RoutesComponents() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/actor" element={<Actor/>} />
            </Routes>
        </BrowserRouter>
    )
}