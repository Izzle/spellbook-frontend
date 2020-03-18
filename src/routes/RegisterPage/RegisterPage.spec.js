import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import RegisterPage from './RegisterPage';
import { MemoryRouter } from 'react-router-dom';


describe('<RegisterPage />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><RegisterPage /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<MemoryRouter><RegisterPage /></MemoryRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});