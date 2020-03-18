import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import SpellBookListPage from './SpellBookListPage';
import { MemoryRouter } from 'react-router-dom';


describe('<SpellBookListPage />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><SpellBookListPage /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<MemoryRouter><SpellBookListPage /></MemoryRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});