// import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

function Filter() {
  return (
    <div>
      <div >
        <div className="relative inline-block text-left">
          <div>
            <div className="h-96  w-80 bg-slate-50 rounded-md border-2 border-slate-600">
                <div className="flex flex-row items-center justify-around bg-slate-50 h-12 w-full">
                   <div>
                   <h1 className="text-black font-bold  text">Refine by</h1>
                   </div>
                   <div> <button className="text-blue-700">Clear</button></div>
                </div>
                <div className="flex flex-col">
                <div className="flex flex-row items-center justify-evenlyr  h-12 w-full border-2">
                    <div><h1 className="text-black h-8 text ml-5 mr-24">Date Of Registration</h1></div>
                    <div><MdKeyboardArrowDown /></div>
                </div>
                <div className="flex flex-row items-center jus h-12 w-full border-2">
                    <h1 className="text-black h-8 text text ml-5 mr-24">Vendor Score</h1>
                    <MdKeyboardArrowDown />
                </div>
                <div className="flex flex-row items-center h-12 w-full border-2">
                    <h1 className="text-black h-8 text text ml-5 mr-24">Rating</h1>
                    <MdKeyboardArrowDown />
                </div>
                <div className="flex flex-row items-center h-12 w-full border-2">
                    <h1 className="text-black h-8 text text ml-5 mr-24">Status</h1>
                    <MdKeyboardArrowDown />
                </div>
                <div className="flex flex-row items-center  h-12 w-full border-2">
                    <h1 className="text-black h-8 text text ml-5 mr-24">Type of business</h1>
                    <MdKeyboardArrowDown />
                </div>
                <div className="flex flex-row items-center  h-12 w-full border-2">
                    <h1 className="text-black h-8 text text ml-5 mr-24">Location</h1>
                    <MdKeyboardArrowDown />
                </div>
                <div className="flex flex-row  items-center h-12 w-full border-2">
                    <h1 className="text-black h-8 text text ml-5 mr-24">Assign to</h1>
                    <MdKeyboardArrowDown />
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
