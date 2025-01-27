export const isStepOneValid = (data) => {

    const {dateBirth} = data
    const errors = {};
    let isValid = true;
    if (dateBirth.length <= 1) {
        errors.dateBirth = "Please enter date";
        isValid = false;
      }
    return { isValid, errors }
}