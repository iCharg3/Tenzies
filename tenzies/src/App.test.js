import Enzyme, {mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

import Difficulty from './App'

test('Difficulty Dropdown works', () => {
    const wrapper = mount(<Difficulty/>)

  // Then its default value is Medium
  expect(wrapper.find('select').props().value).toBe('Medium')

  // When Easy is selected
  wrapper.find('select').simulate('change', {target: {value: 'Easy'}})

  // Then its value changes to Easy
  expect(wrapper.find('select').props().value).toBe('Easy')
})
  