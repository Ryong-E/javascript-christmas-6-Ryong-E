import { CHRISTMAS_DATE } from '../../../constant.js';

class ChristmasDisCount {
  #DISCOUNT_PER_DAY;

  #BASIC_DISCOUNT;

  #EVENT_NAME;

  constructor() {
    this.#EVENT_NAME = '크리스마스 디데이 할인';
    this.#DISCOUNT_PER_DAY = 100;
    this.#BASIC_DISCOUNT = 1000;
  }

  getDiscountResult(reservationDate) {
    try {
      ChristmasDisCount.#isOverEventDate(reservationDate);
      const discount = this.#calculateDiscount(reservationDate);
      return { eventName: this.#EVENT_NAME, discount };
    } catch (error) {
      return false;
    }
  }

  #calculateDiscount(reservationDate) {
    return this.#BASIC_DISCOUNT + (reservationDate - 1) * this.#DISCOUNT_PER_DAY;
  }

  static #isOverEventDate(date) {
    if (date > CHRISTMAS_DATE) throw new Error();
  }
}

export default ChristmasDisCount;
