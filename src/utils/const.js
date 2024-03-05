function generateId() {
  // Generate a random number between 0 (inclusive) and 1 (exclusive)
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp;

  // console.log(absoluteRandomNumber);
}

module.exports = {
  generateId,
};
