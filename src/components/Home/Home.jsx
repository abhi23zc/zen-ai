import React, { useContext, useState } from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Main from "../Main/Main.jsx";
import { AlignLeft } from "lucide-react";
import Context from "../contextApi/Context.jsx";

const Home = () => {
  const { side, setside } = useContext(Context);

  return (
    <div className="flex w-full">
      {side ? (
        <Sidebar />
      ) : (
        <AlignLeft
          className="cursor-pointer m-2"
          onClick={() => setside(true)}
        />
      )}

      <Main />
    </div>
  );
};

export default Home;
