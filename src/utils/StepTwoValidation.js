export const isStepTwoValid = (data) => {
  const { email, phoneNumber, password, confirmPassword } = data;
  const errors = {};
  let isValid = true;
  if (email.length <= 1) {
    errors.email = "Username must contain at least 2 character";
    isValid = false;
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; 
  if (!emailRegex.test(email)) {
    errors.email = "Please enter a valid email address";
    isValid = false;
  }
  if (phoneNumber) {
    const phoneRegex = /^[0-9]{8}$/;
    if (!phoneRegex.test(phoneNumber)) {
      errors.phoneNumber = "Phone number must be exactly 8 digits";
      isValid = false;
    }
  }
  if (phoneNumber.length <= 1) {
    errors.phoneNumber = "Phone number must be exactly 8 digits."
    isValid = false;
};
if (password.length <= 1) {
    errors.password = "Password must be at least 8 characters."
    isValid = false;
};
if (password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;
    if (!passwordRegex.test(password)) {
        errors.password = "Password must contain at least one uppercase letter and one special character";
        isValid = false;
    }

    if (confirmPassword && password !== confirmPassword) {
        errors.confirmPassword = "Passwords must match";
        isValid = false;
    }
}
  return { isValid, errors };
};
