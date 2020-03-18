import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import BuildSpellBookPage from './BuildSpellBookPage';
import { BrowserRouter } from 'react-router-dom';


describe('<BuildSpellBookPage />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><BuildSpellBookPage /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<BrowserRouter><BuildSpellBookPage /></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});