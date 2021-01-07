import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./Nav";
import Products from "./Products";
import SearchProduct from "./SearchProduct";
import AddProduct from "./AddProduct";
import Product from "./Product";
import "./app.css";
import {Link} from "react-router-dom";
import Pagination from "react-js-pagination";

class Example extends React.Component {

state = {
    searchText: "",
    products : [],
    pagination : [],
    loading : true
}
async fetchProducts(searchText, pageNumber){
  searchText = (searchText==undefined) ? '' : searchText;
  pageNumber = (pageNumber==undefined) ? 1 : pageNumber;
  const res = await axios.get('/product?page='+pageNumber+'&&searchText='+searchText);
  if (res.data.status === 200){
          console.log(res);
      this.setState({'products' : res.data.products.data});
      this.setState({'pagination' : res.data.products});
      this.setState({'loading' : false});
      this.renderPagination();
  
  }

} 

renderPagination(){
  const {current_page, per_page, total} = this.state.pagination;
  return(
      <div>
      <Pagination
    activePage={current_page}
    itemsCountPerPage={per_page}
    totalItemsCount={total}
    pageRangeDisplayed={5}
    onChange={(pageNumber)=> this.fetchProducts(this.state.searchText, pageNumber)}
    itemClass="btn-group mr-2"
    linkClass="btn btn-secondary"
    firstPageText="First"
    lastPageText="Last"
  />
      </div>
  );
}
renderProducts(){
  const {product} = this.state.products;
console.log(product);
  return(
      <React.Fragment>
          <div>
{product.map((products, index) =>

<div className="card mb-3 col-md-3" key={index}>
<div className="card-body">
                      <span className="image">
                          {products.product_name[0]}
                      </span>
<div className="row foot">
<span className="card-title product-heading col-md-8">{products.product_name}</span>
<span className="card-subtitle text-muted product-price col-md-4">${products.product_price}.00</span>
  </div>                                
</div>
</div>  
)}
          </div>

      </React.Fragment>
  );
}


  handleRoute = route => () => {
      this.props.history.push({ pathname: route });
  };
  
  handleSearchInput = event => {
    this.setState({
      searchText: event.target.value
    });
    this.fetchProducts(this.state.searchText, 1);
    console.log(this.state);
  };
  
  handleSearchSubmit = () => {
      if (this.state.searchText) {
          let text = this.state.searchText;
          this.setState({ searchText: "" })
          this.props.history.push({
              pathname: "/",
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
  async componentDidMount(){
    await this.fetchProducts('',1);
  }  
  render(){
    const { pagination } = this.state;
    return(
      <div>
      <Router>


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
        <Link className="dropdown-item" to="/allProducts">All Products</Link>
        <Link className="dropdown-item" to="/addProduct">Add A Product</Link>
          {/* <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Separated link</a> */}
        </div>
      </li>
      <li className="nav-item active">
      <form className="form-inline my-2 my-lg-0" onSubmit={this.handleFormSubmit}>
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
                        {/* <button onClick={this.handleSearchSubmit} className="btn btn-primary my-2 my-sm-0" type="submit">
                            Search
                        </button> */}
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
  <li className="breadcrumb-item active">You Found {this.state.pagination.total} Items</li>
</ol>
</div>
</div>
</div>

          {/* <Nav />            */}
  <div className="container mainbody">
      <div className="row">
          <div className="col-md-3 sidebar-padding">
          <h4><strong>Item Type</strong></h4>
<label className="containc sidebar-label">All
<input type="checkbox" defaultChecked/>
<span className="checkmark"></span>
</label>
<label className="containc sidebar-label">Subscription
<input type="checkbox"/>
<span className="checkmark"></span>
</label>
<label className="containc sidebar-label">Premium
<input type="checkbox"/>
<span className="checkmark"></span>
</label>
<label className="containc sidebar-label">Free
<input type="checkbox"/>
<span className="checkmark"></span>
</label>            
<br/>
          <h4><strong>Category</strong></h4>
<label className="containc sidebar-label">Content Calendars
<input type="checkbox" defaultChecked/>
<span className="checkmark"></span>
</label>
<label className="containc sidebar-label">Product Photos
<input type="checkbox"/>
<span className="checkmark"></span>
</label>
<label className="containc sidebar-label">Lifestyle Photos
<input type="checkbox"/>
<span className="checkmark"></span>
</label>
<label className="containc sidebar-label">Background Photos
<input type="checkbox"/>
<span className="checkmark"></span>
</label>            
<label className="containc sidebar-label">IG/Facebook Stories
<input type="checkbox"/>
<span className="checkmark"></span>
</label>            
<label className="containc sidebar-label">Social Media Posts
<input type="checkbox"/>
<span className="checkmark"></span>
</label>            
<label className="containc sidebar-label">Facebook Covers
<input type="checkbox"/>
<span className="checkmark"></span>
</label>            
<label className="containc sidebar-label">Other Graphics
<input type="checkbox"/>
<span className="checkmark"></span>
</label>           
<label className="containc sidebar-label">Texting (MMS/SMS) 
<input type="checkbox"/>
<span className="checkmark"></span>
</label> 
      </div>
          <div className="col-md-9">
          <Switch>
          <Route path="/allProducts" exact component={Products} />
          <Route path="/addProduct" exact component={AddProduct} />
          <Route path="/searchProduct" exact component={SearchProduct} />
          <Route path="/" exact>

<div>

<div className="pagination_bar">
<div className="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-secondary">Popular</button>
  <button type="button" className="btn btn-secondary">New</button>
  <button type="button" className="btn btn-secondary">Promotions</button>
</div>
    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
    {pagination && this.renderPagination()}
    </div>
</div>
          <div className="row">

                {/* {products && this.renderProducts()} */}
                {/* {this.state.products.map(product => (<Product product = {product} key ={product.id} />))} */}
                {this.state.products.map(product => (<Product product = {product} key ={product.id} />))}
          </div>
</div>
          </Route>
          </Switch>


          </div>
      </div>
  </div>
      </Router>
        
      </div>

    )
  }
}

// function Example() {
//     return (
        
//     );
// }

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
