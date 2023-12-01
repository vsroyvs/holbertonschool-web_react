import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

const mockNotifications = [
  {
    id: 1,
    type: 'info',
    value: 'This is an information message',
  },
  {
    id: 2,
    type: 'warning',
    html: {
      __html: '<strong>Warning:</strong> This is a warning message',
    },
  },
];

describe('Notifications Component', () => {
  it('renders notifications when displayDrawer is true', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={mockNotifications}
      />
    );

    expect(wrapper.find('.menuItem')).toHaveLength(1);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find('NotificationItem')).toHaveLength(mockNotifications.length);
  });

  it('renders "No new notification for now" when listNotifications is empty', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={[]}
      />
    );

    expect(wrapper.find('.menuItem')).toHaveLength(1);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
    expect(wrapper.find('table')).toHaveLength(1);
    expect(wrapper.find('ul')).toHaveLength(0);
    expect(wrapper.text()).toContain('No new notification for now');
  });

  it('renders no notifications when displayDrawer is false', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={false}
        listNotifications={mockNotifications}
      />
    );

    expect(wrapper.find('div')).toHaveLength(0);
  });
});