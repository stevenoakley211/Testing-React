import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import StarWarsCharacters from './components/StarWarsCharacters';
import {render} from '@testing-library/react'

// tests if app.js renders 
test('renders App.js', () => {
    render(<App />)
})