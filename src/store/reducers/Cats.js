import {SET_CATS_CATEGORIES} from "../action-creators/Cats";

const initialState={}
export default function catReducer(state=initialState,action) {
switch (action.type) {
    case SET_CATS_CATEGORIES:
        return{
            ...state,
            categories:action.payload
        }
default:
    return state
}
}