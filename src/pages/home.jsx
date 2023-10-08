import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen gap-10">
        <h1 className="font-bold text-3xl text-center">Hey 👋</h1>
        <p className="text-md font-semibold">Lets, create a form</p>
        <Link to={"/form-builder"}>
          <button className="bg-blue-500 text-white rounded-md p-2">
            Create
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
