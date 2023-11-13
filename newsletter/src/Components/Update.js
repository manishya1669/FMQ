import React, { useEffect, useState } from "react";
import Image from "../images/illustrate.svg";
import list from "../images/icon-list.svg";
import success from "../images/icon-success.svg";

function Update() {
    const [effect , setEffect]=useState(true);
    useEffect(()=>{

    },[effect]);
  return (
    <div className="bg-white h-[80%] w-[60%] grid grid-cols-5 gap-3 p-5 mx-auto rounded-3xl">
      <div className="  col-span-3 ">
        <h1 className="text-4xl">Stay updated!</h1>
        <p className="pt-5 ">
          Join 60,000+ product managers receving monthly updates on
        </p>
        <div className="grid grid-rows-3 pt-5">
          <div className="flex pt-3">
            <img src={list} alt="icon" />
            <p> Product discover and building what matters</p>
          </div>
          <div className="flex pt-3">
            <img src={list} alt="icon" />
            <p>Measuring to ensure updates are a success</p>
          </div>
          <div className="flex pt-3">
            <img src={list} alt="icon" />
            <p> And much more!</p>
          </div>
        </div>
        <div className="flex flex-col pt-4  pb-5">
          <span className="">Email address</span>
          <input
            className=" p-2 w-[80%] rounded-md border border-black     "
            placeholder="demo@gmail.com"
          />
        </div>
        <div className=''>
            <button className={`${
            effect && 'bg-red-500 pt-5   '
          }pt-5 rounded-md  shadow-xl px-12  bg-gray-500 text-white    border border-black     "`}
          onClick={() => {
            setEffect(false);
            setTimeout(()=>{
            setEffect(true);
            },5000)
          }}
          >

           Subscribe to monthly newsletter </button>
        {/* <button  className="" > Subscribe to monthly newsletter</button>
           */}
        </div>
      </div>
      <div className="  col-span-2">
        <img src={Image} alt="Illustrate" />
      </div>

    
    </div>
  );
}

export default Update;
