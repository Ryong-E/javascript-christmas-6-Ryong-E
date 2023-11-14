import { Console } from '@woowacourse/mission-utils';
import { EMPTY, NOT, OUTPUT_MESSAGE, TITLE } from './constant.js';

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printIntro() {
    Console.print(EMPTY);
    Console.print(OUTPUT_MESSAGE.intro);
  },

  printNoticeUnApply() {
    Console.print(EMPTY);
    Console.print(OUTPUT_MESSAGE.less_amount);
    Console.print(EMPTY);
  },

  printMenu(orders) {
    Console.print(TITLE.order_menu);
    orders.forEach((order) => {
      const { menuName, quantity } = order;
      Console.print(`${menuName} ${quantity}개`);
    });
    Console.print(EMPTY);
    // ...
  },
  printEventInfo(reservationDate) {
    Console.print(`12월 ${reservationDate}일에 우테코 식당에서 받을 이벤트 혜텍 미리 보기!`);
    Console.print(EMPTY);
  },

  printBeforeDiscountTotalAmount(amount) {
    Console.print(TITLE.before_discount);
    Console.print(`${amount.toLocaleString()}원`);
    Console.print(EMPTY);
  },

  printPresent(present) {
    Console.print(TITLE.present);
    if (present.length === 0) Console.print(NOT);
    if (present.length > 0) Console.print(`${present.join(',')} ${present.length}개`);
    Console.print(EMPTY);
  },

  printDiscountDetail(discounts) {
    Console.print(TITLE.benefit);
    if (discounts.length === 0) Console.print(NOT);
    if (discounts.length > 0) {
      discounts.forEach((discount) => {
        const { eventName, discount: discountAmount } = discount;
        Console.print(`${eventName}: -${discountAmount.toLocaleString()}원`);
      });
    }

    Console.print(EMPTY);
  },

  printTotalDiscountAmount(discountAmount) {
    Console.print(TITLE.total_benefit);
    if (discountAmount <= 0) Console.print(NOT);
    if (discountAmount > 0) Console.print(`-${discountAmount.toLocaleString()}원`);
    Console.print(EMPTY);
  },

  printEstimateAmount(totalOrderAmount, totalDiscountAmount) {
    Console.print(TITLE.after_discount);
    Console.print(`${(totalOrderAmount - totalDiscountAmount).toLocaleString()}원`);
    Console.print(EMPTY);
  },

  printBedge(bedge) {
    Console.print(TITLE.event_bedge);
    if (bedge === false) Console.print(NOT);
    if (bedge) Console.print(bedge);
    Console.print(EMPTY);
  },
};

export default OutputView;
