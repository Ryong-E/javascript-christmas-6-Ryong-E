export const DECEMBER_LAST_DAY = 31;
export const CHRISTMAS_DATE = 25;

export const ORDER_SETTING = {
  max_order: 20,
};

export const EVENT_SETTING = {
  year: 2023,
  month: 11,
};

export const BEDGE_NAME = {
  star: '별',
  tree: '트리',
  santa: '산타',
};

export const ERROR_MESSAGE = {
  not_allow_date: '유효하지 않은 날짜입니다. 다시 입력해주세요.',
  not_allow_menu: ' 유효하지 않은 주문입니다. 다시 입력해주세요.',
  not_only_drink: '음료만 주문할 수 없습니다.',
  over_menu_order: '메뉴는 한 번에 최대 20개까지만 주문 가능합니다.',
};

export const OUTPUT_MESSAGE = {
  intro: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  ask_reservation_date: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  ask_order_menu:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
  event_name: '우테코 식당에서 받을 이벤트 혜택 미리 보기!',
  less_amount: '할인 이벤트는 총 주문 금액 10,000원 이상 부터 적용됩니다.',
};

export const TITLE = {
  order_menu: '<주문 메뉴>',
  before_discount: '<할인 전 총주문 금액>',
  present: '<증정 메뉴>',
  benefit: '<혜택 내역>',
  total_benefit: '<총혜택 금액>',
  after_discount: '<할인 후 예상 결제 금액>',
  event_bedge: '<12월 이벤트 배지>',
};

export const REGEXP = {
  only_number: /^\d+$/,
};
