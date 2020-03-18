import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import BuildSpellBookPage from './BuildSpellBookPage';
import { MemoryRouter } from 'react-router-dom';


describe('<BuildSpellBookPage />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><BuildSpellBookPage /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<MemoryRouter><BuildSpellBookPage /></MemoryRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});