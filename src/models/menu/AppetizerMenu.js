import Menu from './Menu.js';

class AppetizerMenu extends Menu {
  constructor() {
    super(
      {
        양송이스프: 6000,
        타파스: 5500,
        시저샐러드: 8000,
      },
      'appetizer',
    );
  }
}

export default AppetizerMenu;
