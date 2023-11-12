import { DECEMBER_LAST_DAY, EVENT_SETTING } from '../../../constant.js';

class WeekdayDiscount {
  #eventDay;

  #EVENT_NAME;

  #DISCOUNT;

  constructor() {
    this.#eventDay = [];
    this.#DISCOUNT = 2023;
    this.#EVENT_NAME = '평일 할인';
    this.#setEventDay();
  }

  getDiscountResult(reservationDate, order) {
    try {
      this.#isEventDay(reservationDate);
      const discount = this.#calculateDiscount(order);
      return { eventName: this.#EVENT_NAME, discount };
    } catch (error) {
      return false;
    }
  }

  #calculateDiscount(order) {
    if (!order.dessert) return 0;

    const mainMenuCount = order.desert.reduce((acc, current) => acc + current.quantity, 0);

    return this.#DISCOUNT * mainMenuCount;
  }

  #setEventDay() {
    const { year, month } = EVENT_SETTING;
    Array.from({ length: DECEMBER_LAST_DAY }).forEach((_, day) => {
      const date = new Date(year, month, day);
      const currentDay = date.getDay();

      if (date.getMonth() === 11 && currentDay >= 0 && currentDay <= 4) {
        this.#eventDay.push(date.getDate());
      }
    });
  }

  #isEventDay(reservationDate) {
    if (!this.#eventDay.find(reservationDate)) throw new Error();
  }
}
export default WeekdayDiscount;
