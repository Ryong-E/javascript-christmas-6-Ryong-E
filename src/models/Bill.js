import Bedge from './Bedge.js';
import Menus from './menu/Menus.js';
import Promotion from './promotion/Promotion.js';

class Bill {
  #reservationDate;

  #discountedList;

  #orderMenuList;

  #present;

  #bedge;

  #promotion;

  #menu;

  constructor(date) {
    this.#reservationDate = date;
    this.#present = [];
    this.#bedge = new Bedge();
    this.#orderMenuList = {};
    this.#menu = new Menus();
    this.#promotion = new Promotion();
  }

  setMenu(orders) {
    orders.forEach((order) => {
      const { menuName, quantity } = order;
      const classifiedMenu = this.#menu.getOrderState(menuName, quantity);
      const { menu, category } = classifiedMenu;

      if (category in this.#orderMenuList) {
        this.#orderMenuList[category].push(menu);
        return;
      }

      this.#orderMenuList[category] = [menu];
    });
  }

  applyDiscount() {
    const totalDiscountList = this.#promotion.getTotalDiscountResult(
      this.#reservationDate,
      this.#orderMenuList,
    );

    if (totalDiscountList) {
      this.#discountedList = totalDiscountList;
    }
  }

  checkPresent() {
    this.#discountedList.forEach((discountInfo) => {
      if (discountInfo.present) {
        this.#present.push(discountInfo.present);
      }
    });
  }
}
export default Bill;
