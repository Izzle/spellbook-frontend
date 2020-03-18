import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import CreateSpellPage from './CreateSpellPage';
import { BrowserRouter } from 'react-router-dom';


describe('<CreateSpellPage />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><CreateSpellPage /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<BrowserRouter><CreateSpellPage /></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});