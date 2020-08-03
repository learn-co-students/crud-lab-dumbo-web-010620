import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    // console.log(this.props)
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant} />
      </div>
    )
  }
}



/**
 * NOT WORKING!!! WOAH THIS TOOK A WHILE TO FIGURE OUT
 * BUT HELPED ME UNDERSTAND REDUX BETTER! YAY LEARNING!
 * The mastery here is not getting stressed out by technical issues
 * but being able to just keep trying things until you figure it out
 * 
 * const mapStateToProps = ({reduxState}) => ({reduxState})
 * 
 * 
 * so mapStateToProps wasn't working before because I was blindly copying syntax from another thing
 * where it used destructuring syntax (see above). that should be read as: anon ƒ which takes state (obj?) as an arg
 * and returns an object that looks like {reduxState: } ... qq actually wanna search this out
 * 
 * EDIT: I think it's that the destructuring syntax in the argument field pulls a property from the state object out
 * then what is returned is a new object where a key of reduxState points to its own original value
 * 
 * so I guess if you use object destructuring syntax with a property name that does not exist in the object,
 * you will return an object with that property name pointing to undefined. I think I understand this now, but again, qq,
 * it'd be good to read the JS docs to understand this better
 * 
 * anyway, the point is, our state object which is created in the reducer did not have a property name of reduxState
 * so when mapStateToProps executed, it mapped undefined to 
 */
const mapStateToProps = state => ({ restaurants: state.restaurants})

const mapDispatchToProps = dispatch => ({
  addRestaurant: restaurantName => dispatch({type: 'ADD_RESTAURANT', payload: restaurantName}),
  deleteRestaurant: restaurantId => dispatch({type: 'DELETE_RESTAURANT', payload: restaurantId})
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
