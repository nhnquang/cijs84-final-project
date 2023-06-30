import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import WordQuiz from "./pages/WordQuiz";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AppContext from "./components/AppContext";
import Quote from "./components/Quote";

function App() {
  const [appContext, setAppContext] = useState({
    theme: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
    lang: "en",
  });

  const [quotes, setQuotes] = useState(null);
  const [qID, setQID] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://type.fit/api/quotes");
      const jsonData = await response.json();
      setQuotes(jsonData);
      setQID(Math.floor(Math.random() * jsonData.length));
    };
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={appContext}>
      <div className={`App ${appContext.theme} h-screen w-screen p-10`}>
        <Routes>
          <Route
            path="/"
            element={<Home quotes={quotes} setQID={setQID} qID={qID} />}
          />
          <Route path="/wordquiz" element={<WordQuiz />} />
        </Routes>

        <Footer appContext={appContext} setAppContext={setAppContext} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
