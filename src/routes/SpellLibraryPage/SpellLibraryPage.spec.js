import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import SpellLibraryPage from './SpellLibraryPage';
import { BrowserRouter } from 'react-router-dom';


describe('<SpellLibraryPage />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><SpellLibraryPage /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<BrowserRouter><SpellLibraryPage /></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});