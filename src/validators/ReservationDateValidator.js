import ValidationError from '../ValidationError.js';
import { ERROR_MESSAGE, REGEXP } from '../constant.js';

class ReservationDateValidator {
  static isBetweenDate(input) {
    if (Number(input) < 1 || Number(input) > 31) {
      throw new ValidationError(ERROR_MESSAGE.not_allow_date);
    }
  }

  static isNumber(value) {
    if (!REGEXP.only_number.test(value)) {
      throw new ValidationError(ERROR_MESSAGE.not_allow_date);
    }
  }
}
export default ReservationDateValidator;
