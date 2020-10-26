import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
} from '../constants/productConstants'


// PRODUCTS PAGE REDUCER
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


// PRODUCT DETAILS REDUCER
export const productDetailsReducer = (state = { product: { reviews: [] } }, action) => {
    //evaluate the type that is in the action object
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true, ...state };
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload };
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            // state is line 3 an empty array of products
            return state
    }
};