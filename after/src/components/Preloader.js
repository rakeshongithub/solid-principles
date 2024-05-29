import React from "react";
import preloader from "../preloader.gif";

function Preloader() {
  return (
    <div className="loader">
      <img src={preloader} alt="preloader" width={25} /> adding comment
      in-progress...
    </div>
  );
}

export default Preloader;
