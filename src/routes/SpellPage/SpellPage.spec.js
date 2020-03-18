import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import SpellPage from './SpellPage';
import { BrowserRouter } from 'react-router-dom';


describe('<SpellPage />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><SpellPage /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<BrowserRouter><SpellPage /></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});