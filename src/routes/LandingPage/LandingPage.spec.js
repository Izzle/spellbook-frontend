import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage';
import { BrowserRouter } from 'react-router-dom';


describe('<LandingPage />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><LandingPage /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<BrowserRouter><LandingPage /></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});