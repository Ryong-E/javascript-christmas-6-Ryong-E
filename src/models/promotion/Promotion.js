import ChristmasDisCount from './discount/ChristmasDiscount.js';
import SpecialDiscount from './discount/SpecialDiscount.js';
import WeekdayDiscount from './discount/WeekdayDiscount.js';
import WeekendDiscount from './discount/WeekendDiscount.js';
import PresentEvent from './event/PresentEvent.js';

class Promotion {
  #discounts;

  #evnets;

  constructor() {
    this.#discounts = [
      new ChristmasDisCount(),
      new WeekdayDiscount(),
      new WeekendDiscount(),
      new SpecialDiscount(),
    ];
    this.#evnets = [new PresentEvent()];
  }

  getTotalDiscountResult(reservationDate, order) {
    const results = this.#getDiscountInfo(reservationDate, order);

    return results;
  }

  #getDiscountInfo(reservationDate, order) {
    const results = [];

    this.#discounts.forEach((discount) => {
      const result = discount.getDiscountResult(reservationDate, order);

      if (result) results.push(result);
    });

    return results;
  }

  getTotalEventResult(order) {
    const results = this.#getEventResult(order);

    return results;
  }

  #getEventResult(order) {
    const results = [];

    this.#evnets.forEach((event) => {
      const result = event.getPresent(order);

      if (result) results.push(result);
    });

    return results;
  }
}

export default Promotion;
