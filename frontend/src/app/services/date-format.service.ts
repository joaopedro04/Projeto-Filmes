import * as moment from 'moment';
moment.locale('pt-br');

const DateFormatService = (date) => {
  return moment(date).format('L');
}

export default DateFormatService;

