import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import "./App.css";

function App() {
    return (
        <div className="flex flex-col h-[100dvh] justify-center overflow-hidden">
            <Header />
            <main className="flex-1 bg-white justify-center items-center flex">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
