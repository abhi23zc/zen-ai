
import Context from "../contextApi/Context.jsx";

import React, { useContext } from "react";

function SideComponent({ url, text, bg }) {
  const { page, setpage } = useContext(Context);
  return (
    <div
      onClick={() => {
        setpage(text);
      }}
      className="cursor-pointer text-gray-100 text-pretty text-md hover:bg-gray-700 p-2 mt-7 rounded-lg ml-3 mr-5 flex pl-5"
    >
      <img src={url}  alt="d" className="w-6" />
      <p className="pl-3"> {text}</p>
    </div>
  );
}

export default SideComponent;
