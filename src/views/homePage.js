import React from "react";
import Navbar from "../components/nav/nav";
import SearchBar from "../components/searchBar/searchBar";
import Footer from "../components/footer/footer";
import './home.css'

const HomePage = () => {
    return (
        <div className="home-page-container">
            <Navbar />
            <div className="home-main-content">
                <SearchBar />
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;