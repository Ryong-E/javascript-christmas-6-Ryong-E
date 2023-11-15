class PresentEvent {
  #EVENT_NAME;

  #DISCOUNT_BASIS;

  #PRESENT_ITEM;

  constructor() {
    this.#EVENT_NAME = '증정 이벤트';
    this.#PRESENT_ITEM = '샴페인';
    this.#DISCOUNT_BASIS = 120000;
  }

  getPresent(totalDiscount) {
    try {
      this.#isEvent(totalDiscount);
      return { eventName: this.#EVENT_NAME, discount: 25000, present: this.#PRESENT_ITEM };
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
