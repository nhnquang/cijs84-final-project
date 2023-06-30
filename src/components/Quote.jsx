import React from "react";

const Quote = ({ quote }) => {
  return (
    <div className="bg-white rounded w-auto max-w-[800px] m-auto p-10">
      <div className="text-3xl font-bold mb-5">"{quote.text}"</div>
      <div className="text-lg font-medium">- {quote.author} -</div>
    </div>
  );
};

export default Quote;
