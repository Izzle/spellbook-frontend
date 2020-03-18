import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import NotFoundPage from './NotFoundPage';
import { BrowserRouter } from 'react-router-dom';


describe('<NotFoundPage />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><NotFoundPage /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<BrowserRouter><NotFoundPage /></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});