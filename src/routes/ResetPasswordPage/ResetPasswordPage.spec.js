import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import ResetPasswordPage from './ResetPasswordPage';
import { MemoryRouter } from 'react-router-dom';


describe('<ResetPasswordPage />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><ResetPasswordPage /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<MemoryRouter><ResetPasswordPage /></MemoryRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});