import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLastNotification }  from '../utils/utils';
import NotificationItem from './NotificationItem';

function Notifications(){
  return (
    <div className ="Notifications">
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
        <input type='image' height='16px' width='16px' src={closeIcon} alt="close"/>
        </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: getLastNotification() }} />
      </ul>
    </div>
)}

export default Notifications;