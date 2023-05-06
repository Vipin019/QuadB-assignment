import "./Summarycard.css";
import React from "react";

const removePTag = (htmlString) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = htmlString;
  return tempElement.textContent || tempElement.innerText || "";
};

const Summarycard = ({ data }) => {
  return (
    <div className="summaryCard">
      <h1>Summary</h1>
      <div>{removePTag(data?.summary)}</div>
    </div>
  );
};

export default Summarycard;
