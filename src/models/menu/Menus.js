import ValidationError from '../../ValidationError.js';
import { ERROR_MESSAGE } from '../../constant.js';
import AppetizerMenu from './AppetizerMenu.js';
import DessertMenu from './DessertMenu.js';
import DrinkMenu from './DrinkMenu.js';
import MainMenu from './MainMenu.js';

class Menus {
  #menuCategory;

  constructor() {
    this.#menuCategory = [new MainMenu(), new AppetizerMenu(), new DessertMenu(), new DrinkMenu()];
  }

  getOrderState(menuName, quantity) {
    try {
      Menus.#quantiryValidate(quantity);
      const foundMenu = this.#findMenu(menuName, quantity);

      if (foundMenu) return foundMenu;

      throw new Error();
    } catch (error) {
      throw new Error();
    }
  }

  #findMenu(menuName, quantity) {
    let result;

    this.#menuCategory.forEach((category) => {
      const findMenu = category.getMenuPrice(menuName, quantity);
      if (findMenu) result = findMenu;
    });

    return result;
  }

  static #quantiryValidate(quantity) {
    if (quantity < 1) throw new ValidationError(ERROR_MESSAGE.not_allow_menu);
  }
}

export default Menus;
