import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    // console.log(this.props)
    const myReviews = this.props.reviews.filter( review => review.restaurantId === this.props.restaurant.id)
    // const myReviewsJSX = myReviews.map(review => )

    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurant={this.props.restaurant} restaurantId={this.props.restaurant.id} />
        <Reviews reviews={myReviews} deleteReview={this.props.deleteReview} />
        {/* <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview} /> */}
      </div>
    )
  }
}

const mapStateToProps = reduxState => ({reviews: reduxState.reviews})

const mapDispatchToProps = dispatch => ({
  addReview: reviewObject => dispatch({type: 'ADD_REVIEW', payload: reviewObject}),
  deleteReview: reviewId => dispatch({type: 'DELETE_REVIEW', payload: reviewId}),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
