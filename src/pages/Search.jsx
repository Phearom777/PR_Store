import React from "react";
import { Link } from "react-router-dom";

function Search() {
  return (
    <div className="container-fluid">
      <div className="container" style={{height: '28vh'}}>
        <div className="text-start mt-3">
          <Link className="links text-dark text-decoration-none " to={"/"}>
            Home    
          </Link>
          <i className="bi bi-chevron-right bi-sm"></i>
          <span>Search</span>
        </div>
        <div className="text-center mb-5 mt-2">
        <h3>Result Here</h3>
        <p className="line"></p>
      </div>
      </div>
    </div>
  );
}

export default Search;
