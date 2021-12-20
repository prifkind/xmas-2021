import React from "react";

const GifDetail = ({ gifs, selectedGifs }) => {
  if (!selectedGifs) {
    return (
      <div>
        <div className="ui image">
          <img
            src="https://media0.giphy.com/media/l2YWluoNgk342F3k4/giphy.gif?cid=a21891f0rbspqfnoacso2nsik7z6o77le07b4hb6yxp8v3pt&rid=giphy.gif&ct=g"
            alt="Gif viewer"
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <img src={selectedGifs} className="ui image" alt={gifs[0].id} />
    </div>
  );
};

export default GifDetail;
