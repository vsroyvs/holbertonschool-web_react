import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLastNotification } from '../utils/utils';

function Notifications() {
    return (
        <div className="Notifications">
            <button style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                cursor: 'pointer',
                border: 'none',
                background: 'white',
                }}
                aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
                <input type='image' height='16px' width='16px' src={closeIcon} alt="close"/>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li data-priority='urgent' dangerouslySetInnerHTML={{__html: getLastNotification()}}></li>
            </ul>
        </div>
    );
};

export default Notifications;