import React from "react";
import {Link} from "react-router-dom";

const MenuElement = ({ id, img, price, title, place }) => {

    return (
        <Link to={`/element/${id}`}>
            <div className="col-span-1 bg-white p-4 rounded-lg hover:rounded-sm hover:text-blue-400 h-[100%] flex flex-col justify-between">
                <img src={img[0]} alt="house image" className="w-[100%] h-[60%]"/>
                <span>
                    <p className="text-2xl font-bold">$  {price}</p>
                    <p>{title}</p>
                </span>
                <p className="text-sm text-gray-400">{place}</p>
            </div>
        </Link>
    )
}

export default MenuElement;