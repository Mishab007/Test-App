// import React from 'react'
import Filter from "../components/Filter";
import { MdOutlineFilterList } from "react-icons/md";

function Home() {
  return (
    <body className="flex items-center h-screen justify-center">
      <div className="container w-2/4 bg-slate-50 h-2/3">
        <div>
          <button
            type="button"
            className="inline-flex w-40 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <MdOutlineFilterList />
            Filters
          </button>
        </div>
        <Filter />
      </div>
    </body>
  );
}

export default Home;
