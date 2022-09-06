// ROUTERS
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// PAGES
import Home from "./pages/Home";
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
// GLOBAL COMPONENT
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
function App() {

    const [currentPage,setCurrentPage] = useState('Home')
    const handlePageChange = (page) => setCurrentPage(page)
    return (
        <Router>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange}></Navbar>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/portfolio' element={<Portfolio/>}></Route>
                <Route path='/resume' element={<Resume/>}></Route>
            </Routes>
            <Footer></Footer>
        </Router>
    );
}

export default App;
