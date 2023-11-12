import ChristmasDisCount from '../src/models/promotion/discount/ChristmasDiscount';
import SpecialDiscount from '../src/models/promotion/discount/SpecialDiscount';
import WeekdayDiscount from '../src/models/promotion/discount/WeekdayDiscount';
import WeekendDiscount from '../src/models/promotion/discount/WeekendDiscount';

describe('크리스마스 이벤트 테스트', () => {
  test('일자 별 할인 가격 테스트', () => {
    const christmasEvent = new ChristmasDisCount();

    expect(christmasEvent.getDiscountResult(10)).toMatchObject({
      eventName: '크리스마스 디데이 할인',
      discount: 1900,
    });

    expect(christmasEvent.getDiscountResult(25)).toMatchObject({
      eventName: '크리스마스 디데이 할인',
      discount: 3400,
    });
  });

  test('크리스마스 이후 일자 입력 예외 테스트', () => {
    const christmasEvent = new ChristmasDisCount();

    expect(christmasEvent.getDiscountResult(26)).toBeFalsy();
  });
});

describe('주말 할인 테스트', () => {
  test('주말에 메인 메뉴에 대해서 할인 테스트', () => {
    const weekend = new WeekendDiscount();
    const order = {
      main: [
        {
          name: '티본스테이크',
          price: 55000,
          quantity: 3,
        },
      ],
    };

    expect(weekend.getDiscountResult(15, order)).toMatchObject({
      discount: 6069,
      eventName: '주말 할인',
    });
  });

  test('주말에 메인메뉴가 없을 때 ', () => {
    const weekend = new WeekendDiscount();
    const order = {
      appetizer: [
        {
          name: '양송이스프',
          price: 6000,
          quantity: 3,
        },
      ],
    };
    expect(weekend.getDiscountResult(15, order)).toBeFalsy();
  });
});

describe('평일 할인 테스트', () => {
  test('평일에 디저트 메뉴 할인 테스트', () => {
    const weekday = new WeekdayDiscount();
    const order = {
      dessert: [
        {
          name: '초코케이스',
          price: 15000,
          quantity: 3,
        },
      ],
    };

    expect(weekday.getDiscountResult(6, order)).toMatchObject({
      discount: 6069,
      eventName: '평일 할인',
    });
  });
});

describe('특별 할인 테스트', () => {
  test('별이 있는 날 할인 테스트', () => {
    const special = new SpecialDiscount();

    expect(special.getDiscountResult(3)).toMatchObject({ eventName: '특별 할인', discount: 1000 });
  });

  test('별이 없는 날 테스트', () => {
    const special = new SpecialDiscount();

    expect(special.getDiscountResult(5)).toBeFalsy();
  });
});
