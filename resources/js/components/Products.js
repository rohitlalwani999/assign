import React from "react";
import axios from "axios";
import Product from "./Product";

class Products extends React.Component {
    state = {
        products : [],
        loading : true
    }
    fetchProducts = async () => {
        const res = await axios.get("/product");
        if (res.data.status === 200){
            this.setState({'products' : res.data.products});
            this.setState({'loading' : false});
        }
        console.log(res);
    }
    componentDidMount(){
        this.fetchProducts();
    }
    render(){
        if (this.state.loading == true){
            return "<h1>Loading...</h1>"
        } else {
            return(
                <div>    


  <div className="row">{this.state.products.map(product => (
                    <Product product = {product} key ={product.id} />
                ))}</div>
                </div>


            )

        }
    }
}

export default Products;