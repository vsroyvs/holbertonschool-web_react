import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    shallow(<NotificationItem />);
  });

it('renders a notification with value', () => {
  const notification = {
    type: 'info',
    value: 'This is a notification message',
  };

  const mockMarkAsRead = jest.fn();

  const wrapper = shallow(
    <NotificationItem
      type={notification.type}
      value={notification.value}
      markAsRead={mockMarkAsRead}
    />
  );

  expect(wrapper.find('li')).toHaveLength(1);
  expect(wrapper.find('[data-notification-type="info"]')).toHaveLength(1);
  expect(wrapper.text()).toEqual(notification.value);

  wrapper.find('li').simulate('click');

  expect(mockMarkAsRead).toHaveBeenCalledWith();
});

it('renders a notification with HTML content', () => {
  const notification = {
    type: 'warning',
    html: {
      __html: '<strong>Warning:</strong> This is an important message',
    },
  };

  const mockMarkAsRead = jest.fn();

  const wrapper = shallow(
    <NotificationItem
      type={notification.type}
      html={notification.html}
      markAsRead={mockMarkAsRead}
    />
  );

  expect(wrapper.find('li')).toHaveLength(1);
  expect(wrapper.find('[data-notification-type="warning"]')).toHaveLength(1);
  expect(wrapper.html()).toContain(notification.html.__html);

  wrapper.find('li').simulate('click');

  expect(mockMarkAsRead).toHaveBeenCalledWith();
});
});