import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    let restaurants = this.props.restaurants.map(
      (restaurant) => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant} />
    )
    return(
      <ul>
        Restaurants Directory:
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;