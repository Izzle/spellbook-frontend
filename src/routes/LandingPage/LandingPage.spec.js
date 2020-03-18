import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage';
import { MemoryRouter } from 'react-router-dom';


describe('<LandingPage />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><LandingPage /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<MemoryRouter><LandingPage /></MemoryRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});