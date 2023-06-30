import React, { useState } from "react";

const Option = ({ option, correct, setIndex, index, setScore }) => {
  const [userChoice, setUserChoice] = useState(null);

  const handleOnClick = (event) => {
    if (!userChoice) {
      const id = event.target.id;
      setUserChoice(id);
      if (Number(id) + 1 === correct) {
        setScore((score) => score + 1);
      }
      setTimeout(() => {
        setIndex(index + 1);
        setUserChoice(null);
      }, 500);
    }
  };

  return (
    <div>
      {option.map((item, index) => (
        <div
          key={index}
          className={`text-2xl text-slate-800 rounded border-solid border-2 ${
            userChoice ? "" : "hover:bg-slate-50 cursor-pointer"
          } max-w-[400px] m-auto my-3 p-2 ${
            userChoice == index && Number(userChoice) + 1 == correct
              ? "bg-green-200"
              : userChoice == index
              ? "bg-red-300"
              : " "
          }`}
          onClick={handleOnClick}
          id={index}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Option;
