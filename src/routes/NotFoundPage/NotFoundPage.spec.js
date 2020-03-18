import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import NotFoundPage from './NotFoundPage';


describe('<NotFoundPage />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NotFoundPage />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<NotFoundPage />).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});