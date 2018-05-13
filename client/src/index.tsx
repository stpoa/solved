import React from 'react';
import { render } from 'react-dom';

const Root = () => {
    return <div>"Hello World!"</div>;
};

// main
const root = document.getElementById("root");


render(<Root />, root)

