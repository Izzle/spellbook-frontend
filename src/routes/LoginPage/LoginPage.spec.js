import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import { BrowserRouter } from 'react-router-dom';


describe('<LoginPage />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><LoginPage /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<BrowserRouter><LoginPage /></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});