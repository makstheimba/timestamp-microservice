const timestamp = require.main.require('api/timestamp')
const assert = require('assert');
const moment = require('moment');

describe('Timestamp api', () => {
    describe('#isUnix()', () => {
        it('should return true when the value is integer and not negative', () => {
            assert.strictEqual(true, timestamp.isUnix(10))
            assert.strictEqual(true, timestamp.isUnix(0))
        })
        it('should return false when value is not present', () => {
            assert.strictEqual(false, timestamp.isUnix())
        })
        it('should return false when value is not a number', () => {
            assert.strictEqual(false, timestamp.isUnix('msg'))
        })
        it('should return false when value is negative', () => {
            assert.strictEqual(false, timestamp.isUnix(-5))
        })
        it('should return false when value is not an integer', () => {
            assert.strictEqual(false, timestamp.isUnix(3.3))
            assert.strictEqual(false, timestamp.isUnix(true))
        })
    });

    describe('#getTimestamp', () => {
        it('should return valid timestamp if passed value is a unix like timestamp', function() {
            assert.deepEqual({
                unix: 1318781876,
                natural: 'October 16, 2011'
            }, timestamp.getTimestamp('1318781876'));
        })
        it('should return valid timestamp if passed a valid string describing date', function() {
            assert.deepEqual({
                unix: 1451595600,
                natural: 'January 1, 2016',
            }, timestamp.getTimestamp('January 1, 2016'))
        })
        it('should return error message if passed invalid string', function () {
            assert.strictEqual('Can\'t parse date', timestamp.getTimestamp('abcd'))
            assert.strictEqual('Can\'t parse date', timestamp.getTimestamp('true'))
            assert.strictEqual('Can\'t parse date', timestamp.getTimestamp('11 month, 2017'))
        })
    })

})
