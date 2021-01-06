import React from "react";
import {Link} from "react-router-dom";


const Nav = () => {
    return(<div>
      <div className="contanier">
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<Link className="navbar-brand" to="/">One<span className="secnav">drop</span></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor02">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Products</a>
        <div className="dropdown-menu">
        <Link className="dropdown-item" to="/">All Products</Link>
        <Link className="dropdown-item" to="/addProduct">Add A Product</Link>
          {/* <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Separated link</a> */}
        </div>
      </li>
      <li className="nav-item active">
      <form className="form-inline my-2 my-lg-0">
      <input type="text" name="keyword" className="form-control" placeholder="Search here..." required/>
        <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
      </form>
      </li>

    </ul>

    <ul className="nav navbar-nav navbar-right">
    <li className="nav-item active">
        <Link className="nav-link" to="/">Home
          <span className="sr-only">(current)</span>
        </Link>
      </li>

      <li className="nav-item">
      <Link className="nav-link" to="#">About</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="#">Pricing</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="#">Sign In</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="#">Create an account</Link>
      </li>
    </ul>
  </div>
</nav>
  </div>
<div className="row second-header"> 
<div className="col-md-12"> 
<ol className="breadcrumb">
  <li className="breadcrumb-item active">You Found 13630 Items</li>
</ol>
</div>
</div>
</div>
    )
}

export default Nav;