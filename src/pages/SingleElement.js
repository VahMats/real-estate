import React from "react";
import {context} from "../Context";
import {Link, useLocation} from "react-router-dom";
import Slider from "../components/Slider/Slider";

const SingleElement = () => {

    const location = useLocation();
    const allPath = location.pathname.split('/');
    const homeId = allPath[allPath.length - 1];
    const data = {...context[homeId]};

    return(
        <div className="bg-gray-300 pt-12 ">
            <div className="bg-white w-[60vw] p-4 mx-auto pt-4 rounded-xl grid grid-cols-2 gap-8">
                <div className="col-span-full">
                    <Slider dataSlider={data.img} />
                </div>
                <p className="col-span-full text-3xl my-4">{data.title}</p>
                <span className="col-span-full flex justify-start items-center mb-8">
                    <p className="text-3xl font-bold mr-6">$ {data.price}</p>
                    <p className="text-lg text-gray-400">{data.place}</p>
                </span>
                <div className="col-span-1 flex justify-between items-center text-2xl px-12 border-b border-black">
                    <p className="text-gray-600">Սենյակների քանակ</p>
                    <p className="font-bold">{data.rooms}</p>
                </div>
                <div className="col-span-1 flex justify-between items-center text-2xl px-12 border-b border-black">
                    <p className="text-gray-600">Հարկ</p>
                    <p className="font-bold">{data.floor}</p>
                </div>
                <div className="col-span-1 flex justify-between items-center text-2xl px-12 border-b border-black">
                    <p className="text-gray-600">Ընդհանուր մակերեսը</p>
                    <p className="font-bold">{data.area} ք․մ․</p>
                </div>
                <div className="col-span-1 flex justify-between items-center text-2xl px-12 border-b border-black">
                    <p className="text-gray-600">Առաստաղի բարձրությունը</p>
                    <p className="font-bold">{data.height} մ</p>
                </div>
                <div className="col-span-full text-xl mt-4">
                    <p>{data.description}</p>
                </div>
                <div className="col-span-full text-right">
                    <Link to="/"><button className="border-2 border-blue-800 mt-8 w-[30%] mx-auto hover:text-white hover:bg-blue-800 py-2 text-lg font-bold">Վերադառնալ Գլխավոր էջ</button></Link>
                </div>
            </div>
        </div>
    )
}

export default SingleElement;