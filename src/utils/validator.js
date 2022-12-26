export default {
  isEmail: (email) => {
    const emailRegex = /^.+@\S+[.]\S{2,}/;
    return emailRegex.test(email);
  },
  isPassword: (pwd) => {
    const pwdRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\S]{8,}/;
    return pwdRegex.test(pwd);
  }
};
