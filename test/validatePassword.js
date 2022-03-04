const validatePassword = (password) => {
  let validLength = password.length >= 8;
  let hasNumber = /[0-9]/g.test(password);
  let hasLetter = /[A-Za-z]/g.test(password);
  return validLength && hasLetter && hasNumber;
};

module.exports = validatePassword;
