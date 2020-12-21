export const checkErrorStatusCode = (statusCode, errorName) => {
  if (typeof statusCode !== 'number') {
    throw new Error(`Cannot construct ${errorName} due to arguments error`);
  }

  const isStatusCodeValid = /^[1-5][0-9]{2}$/.test(String(statusCode));

  if (!isStatusCodeValid) {
    throw new Error(`statusCode in ${errorName} should be a number in range from 100 to 599`);
  }
};
