import React from "react";

import { Modal, Button, Row, Col, Form} from "react-bootstrap";
class ShowProductModal extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        
        const product1 = this.props.product;
        console.log(product1);

        return(
        <div>
<Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {product1.product_name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
            <table id="Product">
                <tbody>
                <tr>
                    <th>Product Name</th>
                    <th>Product Price</th>
                </tr>
{Object.keys(product1).map((keyName, i) => (
                <tr>
                    <td>{product1[keyName].product_name}</td>
                    <td>{product1[keyName].product_price}</td>
                </tr>
))}                
                </tbody>
            </table>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
                </div>
        );
        }
            

    }


export default ShowProductModal;