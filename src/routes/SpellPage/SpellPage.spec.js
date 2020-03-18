import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import SpellPage from './SpellPage';
import { MemoryRouter } from 'react-router-dom';


describe('<SpellPage />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><SpellPage /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<MemoryRouter><SpellPage /></MemoryRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});