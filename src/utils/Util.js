import { REGEXP } from '../constant.js';

class Util {
  static isNumber(value) {
    if (!REGEXP.only_number.test(value)) {
      throw new Error();
    }
  }
}
export default Util;
