// Prevent Object Mutation
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // After using freeze method no one can change anything in oject
  Object.freeze(MATH_CONSTANTS);
  console.log(MATH_CONSTANTS);
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
    
  }
  const PI = freezeObj();