import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import CreateSpellPage from './CreateSpellPage';
import { MemoryRouter } from 'react-router-dom';


describe('<CreateSpellPage />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><CreateSpellPage /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<MemoryRouter><CreateSpellPage /></MemoryRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});