import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import SpellBookPage from './SpellBookPage';
import { MemoryRouter } from 'react-router-dom';


describe('<SpellBookPage />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><SpellBookPage /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<MemoryRouter><SpellBookPage /></MemoryRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});