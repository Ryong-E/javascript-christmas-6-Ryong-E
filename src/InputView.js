import { Console } from '@woowacourse/mission-utils';
import ReservationDateValidator from './validators/ReservationDateValidator.js';
import { OUTPUT_MESSAGE } from './constant.js';
import OrderValidator from './validators/OrderValidator.js';

const InputView = {
  async askReservationDate() {
    const input = await Console.readLineAsync(OUTPUT_MESSAGE.ask_reservation_date); // ...
    ReservationDateValidator.isNumber(input);
    ReservationDateValidator.isBetweenDate(input);

    return Number(input);
  },

  async askOrderMenu() {
    const input = await Console.readLineAsync(OUTPUT_MESSAGE.ask_order_menu);
    OrderValidator.isDuplicateOrder(input);
    OrderValidator.isLessAmount(input);
    OrderValidator.isExceedOrder(input);

    return this.transOrder(input);
  },

  transOrder(input) {
    const result = [];
    const splitOrder = input.split(',');
    splitOrder.forEach((order) => {
      const [menuName, quantity] = order.split('-');
      result.push({ menuName, quantity });
    });

    return result;
  },

  // ...
};

export default InputView;
