import React from "react";

const GifDetail = ({ selectedGif }) => {
  if (!selectedGif) {
    return (
      <div>
        <div className="ui segment">
          <div className="ui active dimmer">
            <div className="ui text loader">Loading</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <img
        src={selectedGif.images.fixed_height.url}
        className="ui image"
        alt={selectedGif.id}
      />
    </div>
  );
};

export default GifDetail;
