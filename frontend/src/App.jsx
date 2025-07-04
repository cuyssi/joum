import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import "./App.css";

function App() {    

    return (
        <div className="flex justify-center bg-gray-100 min-h-[100dvh]">
            <div className="flex flex-col h-full w-full max-w-[420px] bg-white shadow-md">
                <Header />
                <main className="flex-1 justify-center items-center flex">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/admin" element={<Admin />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default App;
