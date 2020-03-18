import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import App from './App';
import { MemoryRouter } from 'react-router-dom';


describe('<App />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<MemoryRouter><App /></MemoryRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});