state = {
    keyword:'',
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