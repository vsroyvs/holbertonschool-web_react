export function getFullYear() {
  const year = new Date();
  return year.getFullYear();
}

export function getFooterCopy(isIndex) {
  if (isIndex) {
    return 'Holberton School';
  }
  return 'Holberton School main dashboard';
}

export function getLastNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}
