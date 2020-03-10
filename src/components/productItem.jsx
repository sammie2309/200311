import React, { Component } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

class ProductItems extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    axios.get("http://localhost:3000/products").then(res => {
      const products = res.data;
      this.setState({ products });
    });
  }

  handleDelete = product => {
    const products = this.state.products.filter(p => p._id !== product._id);
    this.setState({ products });
  };

  goToAddUser = e => {
    navigate("./add-new-product");
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Description</th>
              <th>Price</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map(product => (
              <tr>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.company}</td>
                <td>
                  <button className="btn btn-primary btn-sm">Edit</button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary" onClick={this.goToAddUser}>
          Add Product
        </button>
      </div>
    );
  }
}

export default ProductItems;
