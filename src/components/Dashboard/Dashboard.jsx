import React from "react";

import DashboardComponent from "./DashboardComponent";

function Dashboard() {
    return (
    <div>
      <div className="heading flex flex-col text-center justify-center items-center mt-14">
        <h1 className="font-bold text-3xl">Explore the power of AI</h1>
        <p>Chat with Smartest AI - Experince the power of AI </p>
      </div>

      <div className="pt-16 w-10/12 pr-16 pl-10 flex flex-col  m-auto">
        <DashboardComponent url={"/dashboard.png"} text={"DashBoard"} />
        <DashboardComponent url={"/conversation.png"} text={"Conversation"} />
        <DashboardComponent url={"/photo.png"} text={"Image Generation"} />
        <DashboardComponent url={"/music.png"} text={"Music Generation"} />
        <DashboardComponent url={"/coding.png"} text={"Code Generation"} />
        <DashboardComponent url={"/setting.png"} text={"Settings"} />
      </div>


    </div>
  );
}

export default Dashboard;
