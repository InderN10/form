
export const isStepTwoValid = (data) => {
    const { email } = data
    const errors = {};
    let isValid = true;
    if (email.length <= 1) {
        errors.email = "Username must contain at least 2 character"
        isValid = false;
    };
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        errors.email = "Please enter a valid email address";
        isValid = false;
    }

    return { isValid, errors }
}