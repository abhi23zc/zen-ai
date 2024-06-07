import React from "react";
import SideComponent from "./SideComponent";

const Sidebar = () => {
  return (
    <div className="lg:w-72 h-screen bg-gray-800 ">
      <div className="text-gray-200 pt-5 font-bold text-3xl flex justify-center items-center">
        <img src={"/zen.png"} className="w-16" />
        <p className="pl-3"> Zen-Z</p>
      </div>
      <div className="pt-16">
        <SideComponent url={"/dashboard.png"} text={"DashBoard"} />
        <SideComponent url={"/conversation.png"} text={"Conversation"} />
        <SideComponent url={"/photo.png"} text={"Image Generation"} />
        <SideComponent url={"/music.png"} text={"Music Generation"} />
        <SideComponent url={"/coding.png"} text={"Code Generation"} />
        <SideComponent url={"/setting.png"} text={"Settings"} />
      </div>
    </div>
  );
};

export default Sidebar;
