import React from 'react';
import ReactDOM from "react-dom";
import Button from '../button';

import { render } from "@testing-library/react";

it('component render successfully',()=>{
    const div= document.createElement('div');
    ReactDOM.render(<Button></Button>,div);
})

it('button render successfully',()=>{
    const {getByTestId}=render(<Button label="Click Me"></Button>);
    expect(getByTestId('button')).toHaveTextContent('Click Me');
})

it('button render successfully',()=>{
    const {getByTestId}=render(<Button label="Click Me Not"></Button>);
    expect(getByTestId('button')).toHaveTextContent('Click Me Not');
})