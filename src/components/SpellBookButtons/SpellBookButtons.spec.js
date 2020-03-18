import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import SpellBookButtons from './SpellBookButtons';
import { BrowserRouter } from 'react-router-dom';


describe('<SpellBookButtons />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><SpellBookButtons /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<BrowserRouter><SpellBookButtons /></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});