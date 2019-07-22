import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper
  wrapper = shallow(<App/>)
  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    // ReactDOM.unmountComponentAtNode(div);
    expect(
      wrapper.type()).toBe('div')
  });
})
