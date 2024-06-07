import Context from "../contextApi/Context.jsx";
import { ArrowRight } from "lucide-react";

import React, { useContext } from "react";

function DashboardComponent({ url, text }) {
  const { page, setpage } = useContext(Context);
  return (
    <div
      onClick={() => {
        setpage(text);
      }}
      className=" cursor-pointer text-gray-800 font-bold text-pretty  text-md bg-gray-100  p-2 mt-7 rounded-lg ml-3 mr-5 flex justify-between pl-5 shadow-md"
    >
      <div
        onClick={() => {
          setpage(text);
        }}
        className="cursor-pointer flex"
      >
        <img src={url} className="w-6" alt="d" />
        <p className="pl-3"> {text}</p>
      </div>
      <ArrowRight className="mr-5 p-1" />
    </div>
  );
}

export default DashboardComponent;
