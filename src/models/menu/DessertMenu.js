import Menu from './Menu.js';

class DessertMenu extends Menu {
  constructor() {
    super(
      {
        초코케이크: 15000,
        아이스크림: 5000,
      },
      'dessert',
    );
  }
}

export default DessertMenu;
