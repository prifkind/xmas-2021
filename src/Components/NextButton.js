import React from "react";

const NextButton = ({ onClickNext }) => {
  return (
    <div>
      <button
        className="ui green button"
        onClick={() => {
          onClickNext();
        }}
      >
        Next
      </button>
    </div>
  );
};

export default NextButton;
