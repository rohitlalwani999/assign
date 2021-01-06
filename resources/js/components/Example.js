import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./Nav";
import Products from "./Products";
import AddProduct from "./AddProduct";
import "./app.css";
function Example() {
    return (
        <div>
        <Router>
            <Nav />           
    <div className="container mainbody">
        <div className="row">
            <div className="col-md-3 sidebar-padding">
            <h4><strong>Item Type</strong></h4>
<label className="containc sidebar-label">All
  <input type="checkbox" checked="checked"/>
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
  <input type="checkbox" checked="checked"/>
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
            <Route path="/" exact component={Products} />
            <Route path="/addProduct" exact component={AddProduct} />
            </Switch>
            </div>
        </div>
    </div>
        </Router>
          
        </div>
        
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
