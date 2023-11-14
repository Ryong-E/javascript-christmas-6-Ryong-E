import Bedge from './Bedge.js';
import Order from './Order.js';
import Promotion from './promotion/Promotion.js';

class Bill {
  #reservationDate;

  #discountedList;

  #orderMenuList;

  #present;

  #bedge;

  #promotion;

  constructor(date) {
    this.#reservationDate = date;
    this.#discountedList = [];
    this.#present = [];
    this.#bedge = new Bedge();
    this.#orderMenuList = new Order();
    this.#promotion = new Promotion();
  }

  setMenu(orders) {
    this.#orderMenuList.setMenu(orders);
  }

  checkToApplyPromotion(noticeFn) {
    if (this.#orderMenuList.isLessMininum(noticeFn)) return;
    this.#applyEvent();
  }

  #applyEvent() {
    this.#applyPromotion();
    this.#checkPresent();
    this.#issuanceBedge();
  }

  #applyPromotion() {
    const totalDiscountList = this.#promotion.getTotalDiscountResult(
      this.#reservationDate,
      this.#orderMenuList.getOrderMenuList(),
    );
    const totalEventList = this.#promotion.getTotalEventResult(this.getTotalOrderAmount());

    if (totalDiscountList) {
      this.#discountedList = totalDiscountList;
    }
    if (totalEventList) {
      this.#discountedList = this.#discountedList.concat(totalEventList);
    }
  }

  #checkPresent() {
    this.#discountedList.forEach((discountInfo) => {
      if (discountInfo.present) {
        this.#present.push(discountInfo.present);
      }
    });
  }

  #issuanceBedge() {
    this.#bedge.issuanceBedge(this.getTotalDiscountAmount());
  }

  getDiscountList() {
    return this.#discountedList;
  }

  getOrderList() {
    return this.#orderMenuList;
  }

  getPresentList() {
    return this.#present;
  }

  getBedge() {
    return this.#bedge.getBedge();
  }

  getTotalDiscountAmount() {
    let total = 0;
    if (this.#discountedList.length === 0) return 0;
    this.#discountedList.forEach((discountInfo) => {
      total += discountInfo.discount;
    });

    return total;
  }

  getTotalOrderAmount() {
    return this.#orderMenuList.getTotalOrderAmount();
  }

  getReservationDate() {
    return this.#reservationDate;
  }
}
export default Bill;
