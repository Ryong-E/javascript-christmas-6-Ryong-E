class PresentEvent {
  #eventName;

  #DISCOUNT_BASIS;

  #presendItem;

  constructor() {
    this.#eventName = '증정 이벤트';
    this.#presendItem = '샴페인';
    this.#DISCOUNT_BASIS = 120000;
  }

  getPresect(totalDiscount) {
    try {
      this.#isEvent(totalDiscount);
      return { eventName: this.#eventName, discount: 25000, present: this.#presendItem };
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
