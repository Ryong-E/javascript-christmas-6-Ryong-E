import { CHRISTMAS_DATE, DECEMBER_LAST_DAY, EVENT_SETTING } from '../../../constant.js';

class SpecialDiscount {
  #eventDay;

  #EVENT_NAME;

  #DISCOUNT;

  constructor() {
    this.#eventDay = [];
    this.#DISCOUNT = 1000;
    this.#EVENT_NAME = '특별 할인';
    this.#setEventDay();
  }

  #setEventDay() {
    const { year, month } = EVENT_SETTING;
    Array.from({ length: DECEMBER_LAST_DAY }).forEach((_, day) => {
      const date = new Date(year, month, day);
      const currentDay = date.getDay();
      if ((date.getMonth() === 11 && currentDay === 0) || date.getDate() === CHRISTMAS_DATE) {
        this.#eventDay.push(date.getDate());
      }
    });
  }

  getDiscountResult(reservationDate, order) {
    try {
      this.#isEvent(reservationDate);
      const discount = this.#calculateDiscount(order);
      return { eventName: this.#EVENT_NAME, discount };
    } catch (error) {
      return false;
    }
  }

  #calculateDiscount() {
    return this.#DISCOUNT;
  }

  #isEvent(reservationDate) {
    if (!this.#eventDay.find(reservationDate)) {
      throw new Error();
    }
  }
}
export default SpecialDiscount;
