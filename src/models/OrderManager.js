import ValidationError from '../ValidationError.js';
import { ERROR_MESSAGE, ORDER_SETTING } from '../constant.js';
import Menus from './menu/Menus.js';

class OrderManager {
  #orderMenuList;

  #menu;

  constructor() {
    this.#orderMenuList = {};
    this.#menu = new Menus();
  }

  setMenu(orders) {
    OrderManager.#isExceedOrder(orders);
    this.#allocateMenu(orders);
    this.#hasOnlyDrink();
  }

  #allocateMenu(orders) {
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

  isLessMininum(callback) {
    const totalAmount = this.getTotalOrderAmount();
    if (totalAmount < ORDER_SETTING.min_discount_amount) {
      callback();
      return true;
    }

    return false;
  }

  #hasOnlyDrink() {
    const totalKeys = Object.keys(this.#orderMenuList);
    const hasDrinkKey = totalKeys.includes('drink');

    if (totalKeys.length === 1 && hasDrinkKey) {
      throw new ValidationError(ERROR_MESSAGE.not_only_drink);
    }

    return true;
  }

  static #isExceedOrder(orders) {
    let orderCount = 0;
    orders.forEach((order) => {
      orderCount += Number(order.quantity);
    });

    if (orderCount > ORDER_SETTING.max_order) {
      throw new ValidationError(ERROR_MESSAGE.over_menu_order);
    }
  }

  getOrderMenuList() {
    return this.#orderMenuList;
  }

  getTotalOrderAmount() {
    let total = 0;
    const categotys = Object.values(this.#orderMenuList);

    if (categotys.length !== 0) {
      categotys.forEach((category) => {
        total += OrderManager.#sumCategoryOrderAmount(category);
      });
    }

    return total;
  }

  static #sumCategoryOrderAmount(category) {
    let sum = 0;
    category.forEach((order) => {
      sum += order.price * order.quantity;
    });

    return sum;
  }
}
export default OrderManager;
