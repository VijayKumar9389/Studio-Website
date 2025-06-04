import './styles/App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from "./pages/Home/Home.tsx";
import OnTract from "./pages/Ontract/OnTract.tsx";
import Emerald from "./pages/Emerald/Emerald.tsx";
import SupplyFlow from "./pages/SupplyFlow/SupplyFlow.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/ontract" element={<OnTract/>}/>
                <Route path="/emerald" element={<Emerald/>}/>
                <Route path="/supplyflow" element={<SupplyFlow/>}/>
            </Routes>
        </Router>
    );
}

export default App;