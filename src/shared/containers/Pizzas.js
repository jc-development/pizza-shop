import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { fetchPizzasList } from '../actions/pizzasActions';
import { updateNav } from '../actions/navActions'

class Pizzas extends Component {

  componentWillMount() {
    this.props.fetchPizzasList();
    this.props.updateNav(this.props.match.path);
  }

  render() {

    const showPizzas = () => {
      if (this.props.pizzas !== null) {
        return this.props.pizzas.map( (pizza, i) => <li key={i}>{pizza.name}</li>);
      } else {
        return null;
      }
    };

    return (
      <>
        <Helmet><title>Pizza's Pizzeria Pizza's List</title></Helmet>
        <h1>Pizza's List</h1>
        <ul>{showPizzas()}</ul>
      </>
    );
  }

};

const mapStateToProps = ({ pizzasState }) => {
  const { pizzas } = pizzasState;
  return { pizzas };
};

export default connect(mapStateToProps, { fetchPizzasList, updateNav })(Pizzas);
