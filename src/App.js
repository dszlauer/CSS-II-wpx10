import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerList: []
    };
  }

  componentDidMount() {
    axios.get("/api/customers").then(response => {
      this.setState({
        customerList: response.data
      });
    });
  }

  deleteCustomer(id) {
    axios.delete(`/api/customer/${id}`).then(response => {
      this.setState({
        customerList: response.data
      });
    });
  }

  // postCustomer(name) {
  //   axios.post(`/api/customer`)
  // }

  render() {
    const mappedCustomerList = this.state.customerList.map(customer => {
      return (
        <div className="customer-card" key={customer.id}>
          <span>
            {`${customer.id}.) `}
            {customer.name}
          </span>

          <button onClick={() => this.deleteCustomer(customer.id)}>
            Delete Customer
          </button>
        </div>
      );
    });
    return (
      <div className="App">
        <header>
          <div>
            <div>
              <h1>Customers Page</h1>
            </div>

            <nav>
              <a href="#">Home</a>
              <a href="#">Account</a>
              <a href="#">Support</a>
              <a href="#">Contact</a>
            </nav>
          </div>
        </header>

        <section>
          <div>
            <h1>Current Customers</h1>

            <div className="customer-card-container">{mappedCustomerList}</div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
