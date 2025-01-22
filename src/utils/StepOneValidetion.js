 export const isStepOneValid = (data) => {
    console.log(data)
    const { firstName } = data;
    const errors = {};
    let isValid = true;

    if (firstName.length <= 1) {
        errors.firstName = ""
        isValid = false;
    } return { isValid, errors }
}