import React from "react";
import axios from "axios";
class AddProduct extends React.Component {
    state = {
        product_name:'',
        product_price:'',
        product_image:''
    }
    handleInput = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }
    saveProduct = async (e) => {
        e.preventDefault();
        const res = await axios.post("./product", this.state);
        if (res.data.status === 200){
            this.setState({product_name:'', product_price:'', product_image:''});
            this.props.history.push('./');
        }
        console.log(res);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.saveProduct}>
                    <div className="form-group">
                        <input type="text" name="product_name" className="form-control"
                        value={this.state.product_name} onChange={this.handleInput} placeholder="Enter Product Name" required/>
                    </div>
                    <div className="form-group">
                        <input type="number" name="product_price" className="form-control"
                        value={this.state.product_price} onChange={this.handleInput} placeholder="Enter Price" required/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="product_image" className="form-control"
                        value={this.state.product_image} onChange={this.handleInput} placeholder="Product Image" required/>
                    </div>
                    <div className="form-group">
                        <input type="submit"  className="btn btn-primary"
                        value="Add Product"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddProduct;