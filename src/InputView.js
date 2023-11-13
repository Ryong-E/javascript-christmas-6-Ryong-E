import { Console } from '@woowacourse/mission-utils';
import ReservationDateValidator from './validators/ReservationDateValidator.js';
import Util from './utils/Util.js';
import { OUTPUT_MESSAGE } from './constant.js';

const InputView = {
  async askReservationDate() {
    const input = await Console.readLineAsync(OUTPUT_MESSAGE.ask_reservation_date); // ...
    Util.isNumber(input);
    ReservationDateValidator.isBetweenDate(input);

    return Number(input);
  },

  // ...
};

export default InputView;
