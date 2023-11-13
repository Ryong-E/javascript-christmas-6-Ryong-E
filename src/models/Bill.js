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
}
export default Bill;
