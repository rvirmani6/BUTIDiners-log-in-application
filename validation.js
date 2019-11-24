const validate = (value, rules) => {
    let isValid = true;
    
    for (let rule in rules) {
    
      switch (rule) {
            case 'minLength': isValid = isValid && minLengthValidator(value, rules[rule]); break;
            case 'isRequired': isValid = isValid && requiredValidator(value); break;
            case 'maxLength': isValid = isValid && maxLengthValidator(value, rules[rule]); break;
          
            default: isValid = true;
      }
  
    }
    
    return isValid;
  }
  
  
  /**
   * minLength Val
   * @param  value 
   * @param  minLength
   * @return          
   */
  const minLengthValidator = (value, minLength) => {
      return value.length >= minLength;
  }

  /**
   * maxLength
   * @param value
   * @param maxLength
   * @return 
   */
  const maxLengthValidator = (value, maxLength) => {
      return value.length <= maxLength;
  }

  /**
 * Check to confirm that field is required
 * 
 * @param  value 
 * @return       
 */
const requiredValidator = value => {
    return value.trim() !== '';	
}
  
  
  export default validate;