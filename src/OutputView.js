import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE, TITLE } from './constant.js';

const OutputView = {
  printIntro() {
    Console.print(OUTPUT_MESSAGE.intro);
  },

  printMenu(orders) {
    Console.print(TITLE.order_menu);
    orders.forEach((order) => {
      const { menuName, quantity } = order;
      Console.print(`${menuName} ${quantity}개`);
    });
    // ...
  },
  printEventInfo(reservationDate) {
    Console.print(`12월 ${reservationDate}일에 우테코 식당에서 받을 이벤트 혜텍 미리 보기!`);
  },

  printBeforeDiscountTotalAmount(amount) {
    Console.print(TITLE.before_discount);
    Console.print(amount);
  },

  printPresent(present) {
    Console.print(TITLE.present);
    Console.print(`${present} 1개`);
  },

  printDiscountDetail(discounts) {
    Console.print(TITLE.before_discount);
    discounts.forEach((discount) => {
      const { eventName, discount: discountAmount } = discount;
      Console.print(`${eventName}: -${discountAmount.toLocaleString()}원`);
    });
  },

  printTotalDiscountAmount(discountAmount) {
    Console.print(TITLE.benefit);
    Console.print(`-${discountAmount.toLocaleString()}원`);
  },

  printEstimateAmount(totalOrderAmount, totalDiscountAmount) {
    Console.print(TITLE.after_discount);
    Console.print(`${(totalOrderAmount - totalDiscountAmount).toLocaleString()}월`);
  },

  printBedge(bedge) {
    Console.print(TITLE.event_bedge);
    Console.print(bedge);
  },
};

export default OutputView;
