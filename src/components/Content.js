import React, {useState} from "react";
import {context} from "../Context";
import MenuElement from "./MenuElement";

const Content = () => {
    const [data, setData] = useState([...context]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [minArea, setMinArea] = useState(0);
    const [maxArea, setMaxArea] = useState(0);
    const [roomNumber, setRoomNumber] = useState(0);

    function changeData () {
        let returningData = [...data]
        if(minPrice !== 0) returningData = returningData.filter(el => el.price >= minPrice);
        if(maxPrice !== 0) returningData = returningData.filter(el => el.price <= maxPrice);
        if(minArea !== 0) returningData = returningData.filter(el => el.area >= minArea);
        if(maxArea !== 0) returningData = returningData.filter(el => el.area <= maxArea);
        if(roomNumber !== 0) returningData = returningData.filter(el => el.rooms === Number(roomNumber));

        setData([...returningData]);

    }

    return (
        <div className="m-0 px-52 grid grid-cols-4 gap-4 py-10 bg-gray-300 relative">
            <div className="col-span-1 bg-white flex flex-col h-[39vh] sticky top-4 justify-around px-4 text-lg rounded-md">
               <div className="w-full flex justify-between">
                   <p>Գին</p>
                   <span className="text-right">
                       <input type="text" onChange={e=>{setMinPrice(e.target.value)}} className="w-[30%] text-center" placeholder="մին"/>
                       <input type="text" onChange={e=>{setMaxPrice(e.target.value)}} className="w-[30%] text-center" placeholder="մաքս"/>
                   </span>
               </div>
                <div className="w-full flex justify-between">
                    <p>Ընդհանուր մակերեսը</p>
                    <span className="text-right">
                        <input type="text" onChange={e=>{setMinArea(e.target.value)}} className="w-[40%] text-center"  placeholder="մին"/>
                        <input type="text" onChange={e=>{setMaxArea(e.target.value)}} className="w-[40%] text-center"  placeholder="մաքս"/>
                    </span>
                </div>
                <div className="w-full flex justify-between">
                    <p>Սենյակների քանակ</p>
                    <input type="text" onChange={e=>{setRoomNumber(e.target.value)}} className="w-[40%] text-center"  placeholder="քանակ"/>
                </div>
                <button className="border-2 border-blue-800 mt-8 w-[50%] mx-auto hover:text-white hover:bg-blue-800" onClick={e=>{changeData()}}>Submit</button>
            </div>
            <div className="col-span-3">
                <div className="grid grid-cols-3 gap-8">
                    {data.map((home,index)=>{
                        return (
                            <MenuElement key={index} {...home}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Content;