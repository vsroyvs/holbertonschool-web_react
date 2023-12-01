import React, { Component } from 'react';
import './Notifications.css';
import close from '../Assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape'

class Notifications extends Component {
  constructor(props) {
    super(props);


    this.markAsRead = this.markAsRead.bind(this);
  }
  markAsRead (id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() { 
    const { displayDrawer, listNotifications } = this.props;
    
    return (
      <>
        <div className="menuItem">Your notifications</div>
        {/* Conditional rendering based on displayDrawer prop */}
        {displayDrawer === true ? (
          <div className="Notifications">
            <button 
              style= {{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: '#ffff',
                border: 'none',
                cursor: 'pointer',
              }}
              aria-label = "Close"  onClick={() => console.log('Close button has been clicked')}>
              <input type='image' height='16px' width='16px' src={close} alt="close"/>
            </button>
            <p>Here is the list of notifications</p>
            
            {/* Conditional rendering based on the length of listNotifications */}
            {listNotifications.length === 0 ? (
              <table>
                <thead>
                  <tr>
                    <td>No new notification for now</td>
                  </tr>
                </thead>
              </table>
            ) : (
              <ul>
                {/* Mapping through listNotifications to render NotificationItems */}
                {listNotifications.map(notification => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={() => this.markAsRead(notification.id)}
                  />
                ))}
              </ul>
            )}
          </div>
        ) : <div></div>}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  id: PropTypes.number,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}

export default Notifications;