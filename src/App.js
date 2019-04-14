import React, { Component } from "react";
import axios from "axios";
import "./App.css";

// React constructors are only used for two purposes: Initializing local state by assigning an object to this.state . Binding event handler methods to an instance.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerList: []
    };
  }
  // componentDidMount means that after data from axios is loaded it will run a function/or something.
  // axios.get gets/pulls data to our REACT app
  // .then means, after getting data, do this with it, in this case put it to this.state array: customers: []
  // setState updates virtual DOM and re-renders
  componentDidMount() {
    axios.get("/api/customers").then(response => {
      this.setState({ customerList: response.data });
    });
  }

  deleteCustomer(id) {
    axios.delete(`/api/customer/${id}`).then(response => {
      this.setState({ customerList: response.data });
    });
  }

  render() {
    const { customerList } = this.state;
    const mappedCustomerList = customerList.map(customer => {
      return (
        // key={customer.id} is so that each item/customer has a unique number
        <div key={customer.id} className="customer-card">
          <span>{`${customer.id} - ${customer.name}`}</span>
          {/* onClick event is set with arrow function so it does not have to be bind. Function envokes this.deleteCustomer method, with custer id */}
          <button
            onClick={() => this.deleteCustomer(customer.id)}
            className="delete-button">
            X
          </button>
        </div>
      );
    });
    return (
      <div className="App">
        <header>
          <div>
            <h1>Customer Page</h1>

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
            <h1>current customers</h1>
            <div className="customer-card-container">{mappedCustomerList}</div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
