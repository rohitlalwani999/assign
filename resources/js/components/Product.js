import React from "react";

class Product extends React.Component {
    render(){
        const {product} = this.props;
        return (
<div className="card mb-3 col-md-3">
  <div className="card-body">
                            <span className="image">
                                {product.product_name[0]}
                            </span>
    <div className="row foot">
    <span className="card-title product-heading col-md-8">{product.product_name}</span>
    <span className="card-subtitle text-muted product-price col-md-4">${product.product_price}.00</span>
        </div>                                
  </div>
  {/* <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div> */}
  {/* <div className="card-footer text-muted">
  </div> */}
</div>  

        );
    }
}

export default Product;
