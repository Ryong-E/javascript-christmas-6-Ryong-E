import { Console } from '@woowacourse/mission-utils';
import ReservationDateValidator from './validators/ReservationDateValidator.js';
import Util from './utils/Util.js';
import { OUTPUT_MESSAGE } from './constant.js';
import OrderValidator from './validators/OrderValidator.js';

const InputView = {
  async askReservationDate() {
    const input = await Console.readLineAsync(OUTPUT_MESSAGE.ask_reservation_date); // ...
    Util.isNumber(input);
    ReservationDateValidator.isBetweenDate(input);

    return Number(input);
  },

  async askOrderMenu() {
    const input = await Console.readLineAsync('메뉴 입력해주세요');
    OrderValidator.isDuplicateOrder(input);
    OrderValidator.isAmount(input);
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
