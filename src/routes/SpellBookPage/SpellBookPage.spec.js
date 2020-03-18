import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import SpellBookPage from './SpellBookPage';
import { BrowserRouter } from 'react-router-dom';


describe('<SpellBookPage />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><SpellBookPage /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<BrowserRouter><SpellBookPage /></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});