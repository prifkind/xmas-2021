import React from "react";

const GifDetail = (gifs) => {
      const gifList = gifs.slice(0,1);
      console.log (gifList)
  return <div>
        {/* <div className="ui embed">
              <iframe src={props[0].embed_url} title="Gif Player" />
        </div> */}
  </div>;
};

export default GifDetail;
