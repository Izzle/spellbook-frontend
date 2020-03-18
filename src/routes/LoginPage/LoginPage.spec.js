import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import { MemoryRouter } from 'react-router-dom';


describe('<LoginPage />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><LoginPage /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<MemoryRouter><LoginPage /></MemoryRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});