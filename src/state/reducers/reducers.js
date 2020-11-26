import * as actions from "../actions/action-types";

const valueUpdateReducer = ( state={value:0}, {type,payload}) =>{
    switch (type) {
        case actions.INCREMENT_VALUE:
            return {value:payload+1}
        
        case actions.DECREMENT_VALUE:
            return {value:payload-1}

        default:
            return state;
    }
}

export default valueUpdateReducer;
