import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Option from "../components/wordquiz/Option";
import Quiz from "../components/wordquiz/Quiz";
import NavBar from "../components/NavBar";
import AppContext from "../components/AppContext";

// Input api key to run
const API_KEY = process.env.REACT_APP_API_KEY;

const WordQuiz = () => {
  const appContext = useContext(AppContext);
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizId, setQuizId] = useState(0);
  const [readyToStart, setReadyToStart] = useState(false);
  const [level, setLevel] = useState(null);
  const [levelButtons, setLevelButtons] = useState(null);

  useEffect(() => {
    const level = [];
    for (let i = 0; i < 10; ++i) {
      level.push(
        <button
          key={i}
          onClick={handleLevelOnClick}
          value={i + 1}
          className="bg-transparent hover:bg-sky-500 text-sky-700 font-semibold hover:text-white py-2 px-4 border border-sky-500 hover:border-transparent rounded"
        >
          {i + 1}
        </button>
      );
      setLevelButtons(level);
    }
  }, []);

  const handleLevelOnClick = (event) => {
    const buttonValue = event.target.value;
    setLevel(Number(buttonValue));

    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://twinword-word-association-quiz.p.rapidapi.com/type1/",
        params: {
          level: buttonValue,
          area: "overall",
        },
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": "twinword-word-association-quiz.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setData(response.data.quizlist);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    setReadyToStart(true);
  };

  const handlePlayAgainClick = () => {
    setData(null);
    setIndex(0);
    setScore(0);
    setReadyToStart(false);
    setQuizId(quizId + 1);
  };

  return (
    <div>
      <NavBar />
      <div className="text-4xl font-bold mb-5 mt-6 text-white">
        {appContext.lang === "en" ? "Score" : "Điểm số"}: {score}
      </div>
      <div className="bg-white rounded max-w-[600px] m-auto px-4 py-8">
        {!readyToStart && levelButtons && (
          <div>
            <div className="text-xl mb-3">
              {appContext.lang === "en"
                ? "Choose a level to play"
                : "Chọn độ khó"}
            </div>
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-2">
              {levelButtons}
            </div>
          </div>
        )}
        {readyToStart && !data && (
          <h1>{appContext.lang === "en" ? "Loading..." : "Đang tải..."}</h1>
        )}
        {readyToStart && data && index < data.length && (
          <>
            {
              <div className="text-sky-400 text-xl font-black mb-3">
                #{index + 1}
              </div>
            }
            {<Quiz quiz={data[index].quiz} />}

            {
              <Option
                option={data[index].option}
                correct={data[index].correct}
                index={index}
                setIndex={setIndex}
                setScore={setScore}
              />
            }
          </>
        )}
        {readyToStart && data && index == data.length && (
          <>
            <div className="text-3xl font-bold text-sky-600">
              {appContext.lang === "en" ? "Final Score" : "Điểm số cuối cùng"}:{" "}
              {score}/{data.length}
            </div>
            <button
              class="mt-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={handlePlayAgainClick}
            >
              {appContext.lang === "en" ? "Play again" : "Chơi lại"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default WordQuiz;
