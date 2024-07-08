/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Returns a list of stuff
*
* returns String
* */
const listGET = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  listGET,
};
