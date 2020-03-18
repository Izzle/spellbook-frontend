import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Spell from './Spell';


describe('<Spell />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Spell higherLevels={'Plus 1 damage'} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<Spell higherLevels={'Plus 1 damage'}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});