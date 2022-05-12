import React from "react";
import BgHouse from "../img/BgHouse.jpg";

const HeroSection = () => {
    return (
        <div style={{backgroundImage: `url(${BgHouse})`}} className="h-screen bg-fixed bg-center bg-no-repeat bg-cover flex justify-start items-end">
            <div className="py-8 m-16 px-10 rounded-lg text-white">
                <h1 className="text-4xl font-bold mb-4">Welcome to the Best Real Estate app in Armenia</h1>
                <h2 className="text-3xl font-semibold ">Let's see our offers</h2>
            </div>
        </div>
    )
}

export default HeroSection;