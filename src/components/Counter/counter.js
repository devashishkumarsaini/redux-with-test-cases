import React from 'react'
import Button from '../Button/button';
import { connect } from "react-redux";
import "./counter.css";
import { incrementValueAction,decrementValueAction } from "../../state/actions/actions";
const Counter = (props) => {

    const handleIncrement=()=>{
        props.incrementValue(props.counterValue);
    }
    const handleDecrement=()=>{
        props.decrementValue(props.counterValue);
    }

    return (
        <div>
            <h1>Counter App</h1>
            <div>
                <h1 className="counterValue">{props.counterValue}</h1>
            </div>
            <div>
                <Button label="Increment" changeValue={handleIncrement} ></Button>
                <Button label="Decrement" changeValue={handleDecrement}></Button>
            </div>
        </div>
    )
};

const MapStateToProps = (state) => {
    return {
        counterValue: state.counter.value
    };
}

const MapDispatchToProps = (dispatch) =>{
    return{
        incrementValue:(value)=> dispatch(incrementValueAction(value)),
        decrementValue:(value)=> dispatch(decrementValueAction(value))
    }
};

export default connect(MapStateToProps, MapDispatchToProps)(Counter);
