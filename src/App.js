import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Carousel from './components/Carousel/Carousel';
import Home from './Pages/Home/Home';
import Details from './Pages/Details/Details';

function App() {

    return (
        <BrowserRouter>
            <header className="header">
                <Carousel></Carousel>
            </header>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/detalhes" element={<Details />}></Route>
                <Route path="*" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
