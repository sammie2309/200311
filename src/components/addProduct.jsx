import React, { Component } from "react";

class AddProduct extends Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="productTitle">Product Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="productDescription">Product Description</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="productPrice">Price</label>
            <input type="number" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="productCompany">Product Name</label>
            <input type="text" className="form-control" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddProduct;
