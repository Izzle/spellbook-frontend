import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import SpellLibraryOptions from './SpellLibraryOptions';


describe('<SpellLibraryOptions />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SpellLibraryOptions />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<SpellLibraryOptions />).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});