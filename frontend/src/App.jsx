import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import clsx from "clsx";
import "./App.css";

function App() {
    return (
        <div className="flex justify-center sm:items-center bg-gray-100 min-h-[100dvh]">
            <div
                className={clsx(
                    "w-full bg-white flex flex-col",
  "sm:max-w-[420px] sm:mx-auto sm:rounded-xl sm:shadow-md sm:overflow-hidden"
                )}
            >
                <Header />
                <main className="flex justify-center items-center">
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
