import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS
} from '../constants/productConstants'


// A reducer takes in two things and initial state as an empty object and an action
export const productListReducer = (state = { products: [] }, action) => {
    //evaluate the type that is in the action object
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] };
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload };
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            // state is line 3 an empty array of products
            return state
    }
};