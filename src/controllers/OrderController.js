import InputView from '../InputView.js';
import OutputView from '../OutputView.js';
import Bill from '../models/Bill.js';

class OrderController {
  #bill;

  async play() {
    OutputView.printIntro();
    await this.#askReservationDate();
    await this.#askOrderMenu();
    this.#applyPromotion();
    this.#printBill();
  }

  async #askReservationDate() {
    try {
      const date = await InputView.askReservationDate();
      this.#bill = new Bill(date);
    } catch (error) {
      OutputView.print(error.message);
      await this.#askReservationDate();
    }
  }

  async #askOrderMenu() {
    try {
      const orders = await InputView.askOrderMenu();
      this.#bill.setMenu(orders);
      OutputView.printEventInfo(this.#bill.getReservationDate());
      OutputView.printMenu(orders);
    } catch (error) {
      OutputView.print(error.message);
      await this.#askOrderMenu();
    }
  }

  #applyPromotion() {
    this.#bill.applyPromotion();
    this.#bill.checkPresent();
    this.#bill.issuanceBedge();
  }

  #printBill() {
    OutputView.printBeforeDiscountTotalAmount(this.#bill.getTotalOrderAmount());
    OutputView.printPresent(this.#bill.getPresentList());
    OutputView.printDiscountDetail(this.#bill.getDiscountList());
    OutputView.printTotalDiscountAmount(this.#bill.getTotalDiscountAmount());
    OutputView.printEstimateAmount(
      this.#bill.getTotalOrderAmount(),
      this.#bill.getTotalDiscountAmount(),
    );
    OutputView.printBedge(this.#bill.getBedge());
  }
}
export default OrderController;
