import React from "react";

const BackButton = ({ onClickBack }) => {
  return (
    <div>
      <button className="ui red button" onClick={() => onClickBack()}>
        Previous
      </button>
    </div>
  );
};

export default BackButton;
