import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import RegisterPage from './RegisterPage';
import { BrowserRouter } from 'react-router-dom';


describe('<RegisterPage />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><RegisterPage /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<BrowserRouter><RegisterPage /></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});