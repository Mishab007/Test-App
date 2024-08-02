import React, { useState } from 'react';
import { MdKeyboardArrowDown ,MdOutlineFilterList } from "react-icons/md";

function Filter({ buttonName, filterOptions }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="flex items-center text-base w-28 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={toggleDropdown}
      >
      <MdOutlineFilterList />
        {buttonName}
      </button>
      {isOpen && (
        <div className="w-80 bg-slate-50 rounded-md border-2 border-slate-200 mt-1">
          <div className="flex rounded-md">
            <div className="flex items-center justify-start ml-5 w-3/4 h-12">
              <h1 className="text-black font-bold">Refine by</h1>
            </div>
            <div className="flex items-center justify-center h-12 w-1/4">
              <button className="text-blue-700">Clear</button>
            </div>
          </div>
          <div className="flex flex-col">
            {filterOptions.map((option, index) => (
              <div key={index} className="flex items-center w-full rounded-md border-2 mt-2">
                <div className="flex items-center justify-start ml-5 w-3/4 h-12">
                  <p className="text-black">{option.name}</p>
                </div>
                <div className="flex items-center justify-center h-12 w-1/4">
                  {option.inputType === 'dropdown' ? <MdKeyboardArrowDown /> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Filter;
