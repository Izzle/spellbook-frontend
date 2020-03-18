import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import SpellBookButtons from './SpellBookButtons';
import { MemoryRouter } from 'react-router-dom';


describe('<SpellBookButtons />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><SpellBookButtons /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<MemoryRouter><SpellBookButtons /></MemoryRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});