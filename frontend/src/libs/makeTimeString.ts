import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo('en-US');

export default (pastTime: string | Date): string => {
  const pastDateTime = new Date(pastTime);
  const timeString = timeAgo.format(pastDateTime, 'round');
  return typeof timeString !== 'string' ? timeString[0] : timeString;
};
