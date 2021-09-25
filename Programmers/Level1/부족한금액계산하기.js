function solution(price, money, count) {
    const TOTAL_COUNT = count * (count + 1) / 2;
    const REMAIN = price * TOTAL_COUNT - money;
  
    return REMAIN < 0 ? 0 : REMAIN;
}
