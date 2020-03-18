import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Spell from './Spell';
import { BrowserRouter } from 'react-router-dom';


describe('<Spell />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><Spell higherLevels={'Plus 1 damage'} /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<BrowserRouter><Spell higherLevels={'Plus 1 damage'}/></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});