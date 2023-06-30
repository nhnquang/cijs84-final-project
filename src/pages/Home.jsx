import React, { useContext, useEffect } from "react";
import NavBar from "../components/NavBar";
import Quote from "../components/Quote";
import { useState } from "react";
import AppContext from "../components/AppContext";

const Home = ({ quotes, qID, setQID }) => {
  const appContext = useContext(AppContext);
  return (
    <div>
      <NavBar />
      {qID && (
        <div className="mt-8">
          <Quote quote={quotes[qID]} />
          <button
            onClick={() => {
              setQID(Math.floor(Math.random() * quotes.length));
            }}
            className="mt-5 bg-white hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
          >
            {appContext.lang === "en" ? "Random Quote" : "Trích dẫn ngẫu nhiên"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
