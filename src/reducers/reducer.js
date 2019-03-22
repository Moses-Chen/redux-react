import types from "../actions/types";
import { combineReducers } from 'redux';

function userData(state = {}, action) {
    switch (action.type) {
        case types.UPDATE_ADDRESS:
            return Object.assign({}, state, Object.assign({}, state.address, action.payload));
        case types.UPDATE_CONTACT_INFORMATION:
            return Object.assign({}, state, Object.assign({}, state.contactInfo, action.payload));
        case types.UPDATE_NAME:
            return Object.assign({}, state, Object.assign({}, state.name, action.payload));
        default:
            return state;
    }
}

const enrollmentApp = combineReducers({
    userData
});

export default enrollmentApp;