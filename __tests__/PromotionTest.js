import Promotion from '../src/models/promotion/Promotion';

describe('프로모션 테스트', () => {
  test('할인 총 결과 테스트', () => {
    const promotion = new Promotion();
    const order = {
      main: [{ name: '티본스테이크', price: 55000, quantity: 3 }],
      appetizer: [{ name: '양송이스프', price: 6000, quantity: 5 }],
    };

    const result = promotion.getTotalDiscountResult(23, order);
    expect(result).toMatchObject([
      { discount: 3200, eventName: '크리스마스 디데이 할인' },
      { discount: 6069, eventName: '주말 할인' },
    ]);
  });

  test('할인이 없을 떄 빈 배열 반환 테스트', () => {
    const promotion = new Promotion();
    const order = {
      appetizer: [{ name: '양송이스프', price: 6000, quantity: 5 }],
    };

    const result = promotion.getTotalDiscountResult(29, order);
    expect(result).toHaveLength(0);
  });

  test('증정 이벤트 테스트', () => {
    const promotion = new Promotion();

    const totalDiscount = 120000;

    expect(promotion.getTotalEventResult(totalDiscount)).toMatchObject([
      { discount: 25000, eventName: '증정 이벤트', present: '샴페인' },
    ]);
  });

  test('증정품이 없을 때 빈 배열 반환 테스트', () => {
    const promotion = new Promotion();

    const totalDiscount = 10000;

    expect(promotion.getTotalEventResult(totalDiscount)).toHaveLength(0);
  });
});
