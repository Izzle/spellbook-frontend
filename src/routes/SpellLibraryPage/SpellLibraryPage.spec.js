import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import SpellLibraryPage from './SpellLibraryPage';
import { MemoryRouter } from 'react-router-dom';


describe('<SpellLibraryPage />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><SpellLibraryPage /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<MemoryRouter><SpellLibraryPage /></MemoryRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});