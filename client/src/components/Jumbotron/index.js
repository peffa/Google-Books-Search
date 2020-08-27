import React from "react";
import "./style.css"


function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1><span><a className="white" id="jumboHead" href="/">Google Books Search</a></span></h1>
        <div>
          <a className="white" target="_blank" rel="noopener noreferrer" href="http://developers.google.com/books/">
          Search for and Save Books of Interest.
          </a>
        </div>
      
    </div>
  );
}



export default Jumbotron;
