const ClientError = require('../ClientError.js');

describe('ClientError', () => {
    it('should throw error when used directly', () => {
        expect(() => new ClientError('').toThrowError('Cannot Instatiate Abstract Class'));
    })
})