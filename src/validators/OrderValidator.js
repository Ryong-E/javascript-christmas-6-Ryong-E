import ValidationError from '../ValidationError.js';
import { ERROR_MESSAGE, ORDER_SETTING, REGEXP } from '../constant.js';

class OrderValidator {
  static isDuplicateOrder(input) {
    const duplicate = new Set();
    const splitMenu = input.split(',');
    const orderLength = splitMenu.length;
    splitMenu.forEach((order) => {
      duplicate.add(order.split('-')[0]);
    });
    if (duplicate.size !== orderLength) throw new Error();
  }

  static isLessAmount(input) {
    const splitMenu = input.split(',');
    splitMenu.forEach((order) => {
      const amount = order.split('-')[1];
      OrderValidator.isNumber(amount);
      if (amount < 1) throw new Error();
    });
  }

  static isExceedOrder(input) {
    let orderCount = 0;
    const splitMenu = input.split(',');

    splitMenu.forEach((order) => {
      const amount = order.split('-')[1];
      OrderValidator.isNumber(amount);
      orderCount += Number(amount);
    });

    if (orderCount > ORDER_SETTING.max_order) throw new Error();
  }

  static isNumber(value) {
    if (!REGEXP.only_number.test(value)) {
      throw new ValidationError(ERROR_MESSAGE.not_allow_menu);
    }
  }
}
export default OrderValidator;
