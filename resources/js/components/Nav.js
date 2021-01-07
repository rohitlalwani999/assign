import React from "react";
import {Link} from "react-router-dom";

class Nav extends React.Component {
  state = {
    searchText: ""
};

handleRoute = route => () => {
    this.props.history.push({ pathname: route });
};

handleSearchInput = event => {
    this.setState({
        searchText: event.target.value
    });
    console.log(this.state);
};

handleSearchSubmit = () => {
    if (this.state.searchText) {
        let text = this.state.searchText;
        this.setState({ searchText: "" })
        this.props.history.push({
            pathname: "/results",
            state: { searchText: text }
        });
        console.log(this.state);
      } else {
        alert("Please enter some search text!");
    }
};

handleSearchKeyUp = event => {
    event.preventDefault();
    if (event.key === 'Enter' && event.keyCode === 13) {
        this.handleSearchSubmit();
    }
}

handleFormSubmit = e => e.preventDefault();

  render(){
  
    const { query } = this.state;
    console.warn(this.state);
    return(
      <div>
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
      <form className="form-inline my-2 my-lg-0" inline onSubmit={this.handleFormSubmit}>
                        <input
                            type="text"
                            onChange={this.handleSearchInput}
                            value={this.state.searchText}
                            onKeyUp={this.handleSearchKeyUp}
                            type="text"
                            id="search-input"
                            placeholder="Search"
                            className="form-control"
                        />
                        <button onClick={this.handleSearchSubmit} className="btn btn-primary my-2 my-sm-0" type="submit">
                            Search
                        </button>
                    </form>
      {/* <form >
      <input
					type="text"
					name="query"
					value={ query }
					id="search-input"
          placeholder="Search..."
          className="form-control"
					onChange={this.handleOnInputChange}
				/>
        <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
      </form> */}
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

}


export default Nav;