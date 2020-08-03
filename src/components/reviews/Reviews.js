import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    
    const reviews = this.props.reviews.map(
      review => 
        <Review 
          key={review.id} 
          restaurant={this.props.restaurant} 
          review={review} 
          deleteReview={this.props.deleteReview} 
        />
    )
    // NEXT STEP: IN MAP STATEMENT ABOVE ADD deleteReview prop
    return (
      <ul>
        Reviews
        {reviews}
      </ul>
    );
  }
};

export default Reviews;