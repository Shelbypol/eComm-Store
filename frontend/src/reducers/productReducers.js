import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_RESET,
    PRODUCT_CREATE_SUCCESS
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

// PRODUCT DELETE REDUCER
export const productDeleteReducer = (state = {}, action) => {
    switch(action.type){
        case PRODUCT_DELETE_REQUEST:
            return { loading: true };
        case PRODUCT_DELETE_SUCCESS:
            return { loading: false, success: true };
        case PRODUCT_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state
    }
};

// PRODUCT CREATE REDUCER
export const productCreateReducer = (state = {}, action) => {
    switch(action.type){
        case PRODUCT_CREATE_REQUEST:
            return { loading: true };
        case PRODUCT_CREATE_SUCCESS:
            return { loading: false, success: true, product: action.payload };
        case PRODUCT_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case PRODUCT_CREATE_RESET:
            return {};
        default:
            return state
    }
};