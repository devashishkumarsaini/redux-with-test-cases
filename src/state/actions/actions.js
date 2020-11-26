import * as actions from "./action-types";

export const incrementValueAction=(value)=>({
    type:actions.INCREMENT_VALUE,
    payload:value
})

export const decrementValueAction=(value)=>({
    type:actions.DECREMENT_VALUE,
    payload:value
})