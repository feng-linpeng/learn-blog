# Throttle 节流函数

``` ts
/**
 * 节流函数
 * @param method 执行函数
 * @param delay 延迟时间 ms
 * @param immediate 是否立即执行
 * @param trailing 触发结束是否执行一次
 */
interface Rest {
  immediate?: boolean;
  trailing?: boolean;
}
const throttle = (
  method: (args: unknown) => any,
  delay: number,
  { immediate = true, trailing = true }: Rest = {}
): any => {
  let timer: any;
  let previous: number = 0; // 上次触发时间
  function throttled(...args: any[]) {
    const context = this;
    const now = new Date().getTime();
    if (!previous && immediate === false) previous = now;
    // 触发剩余时间
    const remaining = delay - (now - previous);
    if (remaining <= 0 || remaining > delay) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      previous = now;
      method.apply(context, args);
    } else if (!timer && trailing !== false) {
      // 非立即执行重置previous=0避免下次触发remaining为负值立即执行
      timer = setTimeout(() => {
        previous = immediate === false ? 0 : new Date().getTime();
        timer = null;
        method.apply(context, args);
      }, remaining);
    }
  }
  return throttled;
};

export default throttle;
```