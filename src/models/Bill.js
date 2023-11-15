import Bedge from './Bedge.js';
import DiscountManager from './DiscountManager.js';
import OrderManager from './OrderManager.js';

class Bill {
  #reservationDate;

  #orderManager;

  #discountManager;

  #bedge;

  constructor(date) {
    this.#reservationDate = date;
    this.#discountManager = new DiscountManager();
    this.#bedge = new Bedge();
    this.#orderManager = new OrderManager();
  }

  setMenu(orders) {
    this.#orderManager.setMenu(orders);
  }

  checkToApplyPromotion(noticeFn) {
    if (this.#orderManager.isLessMininum(noticeFn)) return;
    this.#applyEvent();
  }

  #applyEvent() {
    this.#discountManager.apply(
      this.#reservationDate,
      this.#orderManager.getOrderMenuList(),
      this.#orderManager.getTotalOrderAmount(),
    );
    this.#bedge.issuanceBedge(this.getTotalDiscountAmount());
  }

  getDiscountList() {
    return this.#discountManager.getDiscountList();
  }

  getOrderList() {
    return this.#orderManager;
  }

  getPresentList() {
    return this.#discountManager.getPresentList();
  }

  getBedge() {
    return this.#bedge.getBedge();
  }

  getTotalDiscountAmount() {
    return this.#discountManager.getTotalDiscountAmount();
  }

  getTotalOrderAmount() {
    return this.#orderManager.getTotalOrderAmount();
  }

  getReservationDate() {
    return this.#reservationDate;
  }
}
export default Bill;
