import Promotion from './promotion/Promotion.js';

class DiscountManager {
  #discountedList;

  #promotion;

  #present;

  constructor() {
    this.#discountedList = [];
    this.#present = [];
    this.#promotion = new Promotion();
  }

  apply(reservationDate, orderList, totalOrderAmount) {
    this.#applyPromotion(reservationDate, orderList, totalOrderAmount);
    this.#checkPresent();
  }

  #applyPromotion(reservationDate, orderList, totalOrderAmount) {
    const totalDiscountList = this.#promotion.getTotalDiscountResult(reservationDate, orderList);
    const totalEventList = this.#promotion.getTotalEventResult(totalOrderAmount);

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

  getDiscountList() {
    return this.#discountedList;
  }

  getPresentList() {
    return this.#present;
  }

  getTotalDiscountAmount() {
    let total = 0;
    if (this.#discountedList.length === 0) return 0;
    this.#discountedList.forEach((discountInfo) => {
      total += discountInfo.discount;
    });

    return total;
  }
}

export default DiscountManager;
