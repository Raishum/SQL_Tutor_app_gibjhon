import Home from './pages/home';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUsPage from './pages/AboutUsPage';
import OurSubjectsPage from './pages/OurSubjectsPage';
import ContactUsPage from './pages/ContactUsPage';
import CookiesPolicyPage from './pages/CookiesPolicyPage';
import React, { useState } from 'react';
import Register from "./pages/Register";
import Login from "./pages/Login";


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Routes>

        <Route path ="/" element={<Home/>}/>
        <Route path ="/Home" element ={<Home/>}/>
        <Route path ="/OurSubjectsPage" element ={<OurSubjectsPage/>}/>
        <Route path ="/AboutUsPage" element ={<AboutUsPage/>}/>
        <Route path ="/ContactUsPage" element ={<ContactUsPage/>}/>
        <Route path ="/CookiesPolicyPage" element ={<CookiesPolicyPage/>}/>
    

             <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
     
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
