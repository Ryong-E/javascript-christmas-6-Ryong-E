import DiscountManager from '../src/models/DiscountManager';

describe('discountManager 테스트', () => {
  test('일자와 주문애역에 맞는 할인 내역을 가지고있는지', () => {
    const reservationDate = 24;
    const orderList = {
      main: [
        { name: '티본스테이크', price: 55000, quantity: 1 },
        { name: '바비큐립', price: 54000, quantity: 1 },
      ],
      appetizer: [{ name: '양송이스프', price: 6000, quantity: 1 }],
      drink: [{ name: '제로콜라', price: 3000, quantity: 1 }],
    };
    const totalAmount = 118000;
    const discountManager = new DiscountManager();
    discountManager.apply(reservationDate, orderList, totalAmount);
    expect(discountManager.getDiscountList()).toMatchObject([
      { eventName: '크리스마스 디데이 할인', discount: 3300 },
      { eventName: '특별 할인', discount: 1000 },
    ]);
  });

  test('증정품 이벤트 적용 테스트 ', () => {
    const reservationDate = 24;
    const orderList = {
      main: [
        { name: '티본스테이크', price: 55000, quantity: 2 },
        { name: '바비큐립', price: 54000, quantity: 1 },
      ],
      appetizer: [{ name: '양송이스프', price: 6000, quantity: 1 }],
      drink: [{ name: '제로콜라', price: 3000, quantity: 1 }],
    };
    const totalAmount = 173000;
    const discountManager = new DiscountManager();
    discountManager.apply(reservationDate, orderList, totalAmount);
    expect(discountManager.getDiscountList()).toMatchObject([
      { eventName: '크리스마스 디데이 할인', discount: 3300 },
      { eventName: '특별 할인', discount: 1000 },
      { eventName: '증정 이벤트', discount: 25000 },
    ]);
    expect(discountManager.getPresentList()).toMatchObject(['샴페인']);
  });

  test('할인 총 금액 반환 테스트 ', () => {
    const reservationDate = 24;
    const orderList = {
      main: [
        { name: '티본스테이크', price: 55000, quantity: 2 },
        { name: '바비큐립', price: 54000, quantity: 1 },
      ],
      appetizer: [{ name: '양송이스프', price: 6000, quantity: 1 }],
      drink: [{ name: '제로콜라', price: 3000, quantity: 1 }],
    };
    const totalAmount = 173000;
    const discountManager = new DiscountManager();
    discountManager.apply(reservationDate, orderList, totalAmount);
    expect(discountManager.getTotalDiscountAmount()).toEqual(29300);
  });
});
