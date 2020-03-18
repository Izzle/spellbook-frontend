import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import { MemoryRouter } from 'react-router-dom';


describe('<Nav />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><Nav /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<MemoryRouter><Nav /></MemoryRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});