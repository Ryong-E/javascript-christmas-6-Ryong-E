import Menu from './Menu.js';

class DrinkMenu extends Menu {
  constructor() {
    super(
      {
        제로콜라: 3000,
        레드와인: 60000,
        샴페인: 25000,
      },
      'drink',
    );
  }
}
export default DrinkMenu;
