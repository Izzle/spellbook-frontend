import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import BuildSpellBookButtons from './BuildSpellBookButtons';
import { BrowserRouter } from 'react-router-dom';


describe('<BuildSpellBookButtons />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><BuildSpellBookButtons /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<BrowserRouter><BuildSpellBookButtons /></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});