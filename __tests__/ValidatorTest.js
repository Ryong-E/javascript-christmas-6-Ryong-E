import OrderValidator from '../src/validators/OrderValidator';
import ReservationDateValidator from '../src/validators/ReservationDateValidator';

describe('주문 입력 예외 처리 테스트', () => {
  test('중복 주문이 있을 때', () => {
    expect(() => OrderValidator.isDuplicateOrder('티본스테이크-1,티본스테이크-1')).toThrow();
  });

  test('주문 수량이 1이하 일 때', () => {
    expect(() => OrderValidator.isLessAmount('티본스테이크-0,티본스테이크-1')).toThrow();
  });

  test('주문 수량이 숫자가 아닐 때', () => {
    expect(() => OrderValidator.isLessAmount('티본스테이크-ㅁ,티본스테이크-*')).toThrow();
  });
});

describe('예약 날짜 입력 예외 테스트', () => {
  test.each(['q', '*', ' '])('숫자를 입력하지 않았을 떄', (input) => {
    expect(() => ReservationDateValidator.isNumber(input)).toThrow();
  });

  test.each(['32', '0', ' '])('1~31숫자가 아닌 경우', (input) => {
    expect(() => ReservationDateValidator.isBetweenDate(input)).toThrow();
  });
});
