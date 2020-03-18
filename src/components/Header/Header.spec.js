import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';


describe('<Header />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><Header /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<MemoryRouter><Header /></MemoryRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});