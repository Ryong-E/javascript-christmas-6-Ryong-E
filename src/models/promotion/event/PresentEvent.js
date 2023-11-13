class PresentEvent {
  #eventName;

  #DISCOUNT_BASIS;

  #presentItem;

  constructor() {
    this.#eventName = '증정 이벤트';
    this.#presentItem = '샴페인';
    this.#DISCOUNT_BASIS = 120000;
  }

  getPresent(totalDiscount) {
    try {
      this.#isEvent(totalDiscount);
      return { eventName: this.#eventName, discount: 25000, present: this.#presentItem };
    } catch (erorr) {
      return false;
    }
  }

  #isEvent(totalDiscount) {
    if (totalDiscount < this.#DISCOUNT_BASIS) {
      throw new Error();
    }
  }
}

export default PresentEvent;
