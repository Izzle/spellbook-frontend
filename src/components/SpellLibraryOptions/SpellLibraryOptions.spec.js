import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import SpellLibraryOptions from './SpellLibraryOptions';
import { BrowserRouter } from 'react-router-dom';


describe('<SpellLibraryOptions />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><SpellLibraryOptions /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<BrowserRouter><SpellLibraryOptions /></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});