import React from "react";

const Quiz = ({ quiz }) => {
  return (
    <div className="flex flex-wrap m-auto max-w-[600px] justify-center gap-x-5 gap-y-2 mb-5">
      {quiz.map((item, index) => (
        <div key={index} className="text-3xl text-slate-800 font-bold ">
          {item}
        </div>
      ))}
    </div>
  );
};

export default Quiz;
