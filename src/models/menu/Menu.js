class Menu {
  #menu;

  #category;

  constructor(menu, category) {
    this.#menu = menu;
    this.#category = category;
  }

  getMenuPrice(menuName, quantity) {
    let totalAmount;
    let menu;
    if (menuName in this.#menu) {
      totalAmount = this.#menu[menuName] * quantity;
      menu = { name: menuName, price: this.#menu[menuName], quantity };
      return { totalAmount, menu, category: this.#category };
    }

    return false;
  }
}
export default Menu;
