import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProductLanding from './pages/product-landing/ProductLanding';
import SmartBio from './pages/smartbio/SmartBio';
import NotFound from './pages/not-found/NotFound';
import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<ProductLanding />}></Route>
                <Route path=":id/*" element={<SmartBio />}></Route>
                <Route path="error" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
