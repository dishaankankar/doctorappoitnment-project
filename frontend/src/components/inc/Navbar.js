import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (


    // <div className="navbar-dark bg-dark shadow">
    //     <div className="container">
    //         <div className="row">
    //             <div className="col-md-12">
    //                 <nav className="navbar navbar-expand-lg">
    //                     <div class="cotainer-fluid"/>..
                        
    //                 </nav>

    //             </div>
    //             </div>
    //             </div>


    // </div>


    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div class="container-fluid">
        {/* <a class="" href="#">Navbar</a> */}
        <Link to="/" class="navbar-brand">
          {" "}
          Practo
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              {/* <a  aria-current="page" href="#">Home</a> */}
              <Link to="/" class="nav-link active">
                {" "}
                Home
              </Link>
            </li>
            <li class="nav-item">
              {/* <a class="nav-link" href="#">Link</a> */}
              <Link to="/about" class="nav-link active">
                {" "}
                About Us
              </Link>
            </li>
            <li class="nav-item">
              {/* <a class="nav-link" href="#">Link</a> */}
              <Link to="/contact" class="nav-link active">
                {" "}
                Contact Us
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
              
                Service
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Lab Tests
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Surgeries
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Medicines
                  </a>
                </li>
              </ul>
            </li>
            {/* <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> */}
          </ul>
          {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/
        >
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
