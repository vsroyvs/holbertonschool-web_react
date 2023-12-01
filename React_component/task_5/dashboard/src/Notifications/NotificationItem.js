import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = React.memo(({ type, html, value, markAsRead }) => {
  let element;

  value 
    ? (element = (
        <li 
          data-notification-type={type}
          onClick={markAsRead}
        >
          {value}
        </li>
      ))
    : (element = (
        <li 
          data-notification-type={type}
          dangerouslySetInnerHTML={{__html: html}}
          onClick={markAsRead}
        ></li>
      ));

  return element;
});

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  isLoggedIn: false,
  type: 'default',
}

export default NotificationItem;