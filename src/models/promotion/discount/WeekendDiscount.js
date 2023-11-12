import { DECEMBER_LAST_DAY, EVENT_SETTING } from '../../../constant.js';

class WeekendDiscount {
  #eventDay;

  #DISCOUNT;

  #EVENT_NAME;

  constructor() {
    this.#DISCOUNT = 2023;
    this.#EVENT_NAME = '주말 할인';
    this.#eventDay = [];
    this.#setEventDay();
  }

  #setEventDay() {
    const { year, month } = EVENT_SETTING;
    Array.from({ length: DECEMBER_LAST_DAY }).forEach((_, day) => {
      const date = new Date(year, month, day);
      const currentDay = date.getDay();

      if ((date.getMonth() === 11 && currentDay === 5) || currentDay === 6) {
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

  #calculateDiscount(order) {
    const mainMenuCount = order.main.reduce((acc, current) => acc + current.quantity, 0);

    return this.#DISCOUNT * mainMenuCount;
  }

  #isEvent(reservationDate) {
    if (!this.#eventDay.includes(reservationDate)) {
      throw new Error();
    }
  }
}

export default WeekendDiscount;
