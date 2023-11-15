import OrderManager from '../src/models/OrderManager';

describe('OrderManager 주문 테스트', () => {
  test('메뉴 생성 테스트', () => {
    const input = [
      { menuName: '티본스테이크', quantity: 1, category: 'main' },
      { menuName: '바비큐립', quantity: 1, category: 'main' },
      { menuName: '양송이스프', quantity: 1, category: 'appetizer' },
      { menuName: '제로콜라', quantity: 1, category: 'drink' },
    ];
    const result = {
      main: [
        { name: '티본스테이크', price: 55000, quantity: 1 },
        { name: '바비큐립', price: 54000, quantity: 1 },
      ],
      appetizer: [{ name: '양송이스프', price: 6000, quantity: 1 }],
      drink: [{ name: '제로콜라', price: 3000, quantity: 1 }],
    };
    const ordermanager = new OrderManager();
    ordermanager.setMenu(input);
    expect(ordermanager.getOrderMenuList()).toMatchObject(result);
  });
});

describe('OrderManager 예외 테스트', () => {
  test('메뉴 총 주문 갯수가 20를 초과 할 떄', () => {
    const input = [
      { menuName: '티본스테이크', quantity: 10, category: 'main' },
      { menuName: '바비큐립', quantity: 5, category: 'main' },
      { menuName: '양송이스프', quantity: 10, category: 'appetizer' },
      { menuName: '제로콜라', quantity: 5, category: 'drink' },
    ];

    const ordermanager = new OrderManager();
    expect(() => ordermanager.setMenu(input)).toThrow();
  });

  test('음료만 주문 했을 때', () => {
    const input = [
      { menuName: '레드와인', quantity: 1, category: 'drink' },
      { menuName: '제로콜라', quantity: 5, category: 'drink' },
    ];

    const ordermanager = new OrderManager();
    expect(() => ordermanager.setMenu(input)).toThrow();
  });

  test('총 주문 금액이 10000원 이하일 때', () => {
    const input = [{ menuName: '타파스', quantity: 1, category: 'appetizer' }];

    const callback = jest.fn();
    const ordermanager = new OrderManager();
    ordermanager.setMenu(input);
    ordermanager.isLessMininum(callback);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
