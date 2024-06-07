"use client";
import React, { useContext, useEffect, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import Context from "../contextApi/Context";
import Conversation from "../Conversation/Conversation";
import Code from "../Code/Code";

const Main = () => {
  const { page, setpage, side, setside } = useContext(Context);

  return (
    <div onClick={()=>{
      setside(false)
    }} className="w-full">
      {page == "DashBoard" ? (
        <div className="w-full">
          <Dashboard />
        </div>
      ) : null}

      {page == "Conversation" ? (
        <div className="w-full">
          <Conversation />
        </div>

      ) : null}

      {page == "Image Generation" ? (
        <div className="w-full">
          <Dashboard />
        </div>
      ) : null}

      {page == "Music Generation" ? (
        <div className="w-full">
          <Dashboard />
        </div>
      ) : null}

      {page == "Code Generation" ? (
        <div className="w-full">
          <Code />
        </div>
      ) : null}

     
    </div>
  );
};

export default Main;
