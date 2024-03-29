import React from "react";
import { BrowserRouter as Tes, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


export default function React() {
    return (
        <Tes>
            <Routes>
                <Route path="/" element={<Layout/>}/>
                <Route index element={<Home/>}/>
                <Route path="/blogs" element={<Blogs/>}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="*" element={<NoPage/>}/>
            </Routes>
        </Tes>
    );
}

function Layout() {
    return <h2>Layout</h2>
}

function Home() {
    return <h2>Home</h2>
}

function Blogs() {
    return <h2>Blogs</h2>
}

function Contact() {
    return <h2>Contact</h2>
}

function NoPage() {
    return <h2>NoPage</h2>
}