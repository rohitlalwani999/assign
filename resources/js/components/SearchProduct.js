import React from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
import Product from "./Product";
import { data } from "jquery";

class SearchProducts extends React.Component {
    state = {
        products : [],
        pagination : [],
        loading : true
    }
    async fetchProducts(pageNumber, keyword){
        pageNumber = (pageNumber==undefined) ? 1 : pageNumber;
        keyword = (keyword==undefined) ? 'Pro' : '';
        const res = await axios.get('/productsearch?page='+pageNumber+'&&keyword='+keyword);
        if (res.data.status === 200){
            console.log(res);
            this.setState({'products' : res.data.products.data});
            this.setState({'pagination' : res.data.products});
            this.setState({'loading' : false});
            this.renderPagination();
        }

    } 
    async componentDidMount(){
       await this.fetchProducts();
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
          onChange={(pageNumber)=> this.fetchProducts(pageNumber)}
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
    render(){
        if (this.state.loading == true){
            return "<h1>Loading...</h1>"
        } else {
            const { products } = this.state;
            const { pagination } = this.state;
            return(
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


            )

        }
    }
}

export default SearchProducts;