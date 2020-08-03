import cuid from 'cuid';
export const cuidFn = cuid;

/**
 * why in the console is state still undefined instead
 * of being an empty array?
 */
export default function manageRestaurants(state = {
    restaurants: [],
    reviews: [],
}, action) {
    switch(action.type){

        case 'ADD_RESTAURANT':
            return {...state, restaurants: [...state.restaurants, {text: action.payload, id: cuidFn()}]};
        
        case 'DELETE_RESTAURANT':
            return {...state, restaurants: [...state.restaurants.filter(restaurant => restaurant.id !== action.payload)]};

            case 'ADD_REVIEW':
                return {...state, reviews: [...state.reviews, {text: action.payload.reviewText, restaurantId: action.payload.restaurantId, id: cuidFn()}]};
            
            case 'DELETE_REVIEW':
                return {...state, reviews: [...state.reviews.filter(review => review.id !== action.payload)]};
        
        default:
            return {...state};
    }
}
