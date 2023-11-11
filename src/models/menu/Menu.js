class Menu {
  #menu;

  constructor(menu) {
    this.#menu = menu;
  }

  getMenuPrice(menuName, quantity) {
    let totalAmount;
    let menu;
    if (menuName in this.#menu) {
      totalAmount = this.#menu[menuName] * quantity;
      menu = { name: menuName, price: this.#menu[menuName], quantity };
      return { totalAmount, menu };
    }

    return false;
  }
}
export default Menu;
