import DrinkMenu from '../src/models/menu/DrinkMenu';
import MainMenu from '../src/models/menu/MainMenu';
import Menus from '../src/models/menu/Menus';

describe('Menu 테스트', () => {
  test('menu 생성 테스트', () => {
    const mainMenu = new MainMenu();
    const drinkMenu = new DrinkMenu();
    expect(mainMenu.getMenuPrice('바비큐립', 1)).toMatchObject({ totalAmount: 54000 });
    expect(drinkMenu.getMenuPrice('제로콜라', 1)).toMatchObject({ totalAmount: 3000 });
  });
});

describe('Menus 테스트', () => {
  test.each([
    ['티본스테이크', '3', 165000],
    ['양송이스프', '4', 24000],
  ])('메뉴 입력시 수량에 맞는 총 금액 테스트', (menuName, quantity, amount) => {
    const menus = new Menus();
    expect(menus.getOrderState(menuName, quantity)).toMatchObject({ totalAmount: amount });
  });

  test.each([
    ['콘푸라이트', '3', 165000],
    ['된장찌개', '4', 24000],
  ])('메뉴 없는 메뉴 입력 시 예외 테스트', (menuName, quantity, amount) => {
    const menus = new Menus();
    expect(() => menus.getOrderState(menuName, quantity)).toThrow();
  });

  test.each([
    ['티본스테이크', '0', 165000],
    ['양송이스프', '0', 24000],
  ])('메뉴 입력시 수량이 1보다 작을 경우 예외 테스트', (menuName, quantity, amount) => {
    const menus = new Menus();
    expect(() => menus.getOrderState(menuName, quantity)).toThrow();
  });
});
