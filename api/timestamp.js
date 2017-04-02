const moment = require('moment');

const isUnix = val => Number.isInteger(val) && val >= 0;
const isVerbal = val => moment(val, 'MMMM D, YYYY').isValid();

module.exports = {
    isUnix,
    isVerbal,
    getTimestamp: val => {
        console.log(val);
        if (isUnix(+val)) {
            return {
                unix: +val,
                natural: moment.unix(val).format('MMMM D, YYYY')
            }
        } else if (isVerbal(val)) {
            const momentVal = moment(val, 'MMMM D, YYYY');
            return {
                unix: momentVal.unix(),
                natural: momentVal.format('MMMM D, YYYY'),
            }
        }
        return 'Can\'t parse date';
    },
}
