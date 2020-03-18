import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import SpellBookLink from './SpellBookLink';
import { BrowserRouter } from 'react-router-dom';


describe('<SpellBookLink />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><SpellBookLink /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<BrowserRouter><SpellBookLink /></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});