import { createRoot } from 'react-dom/client';
import Sample from './components/Sample';
import MainPage from './pages/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router';

const App = () => {
    return (
        <>
            <Routes>
                <Route index element={<MainPage/>} />
                <Route path="/create-course" element={<Sample/>} />
            </Routes>
        </>
    );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);