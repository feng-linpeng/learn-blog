# Debounce 防抖函数

``` ts
/* 
@param  method 执行函数 
@param  delay 延迟时间 ms 
@param  immediate 是否立即执行 
*/
const debounce = (method: (...args: any[]) => any, delay: number, immediate: boolean = true): any => {
  let timer: any;
  function debounced(...args: any[]): any {
    const context = this;
    if (timer) {
      clearTimeout(timer);
    }
    // 是否立即执行防抖
    if (immediate) {
      const callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, delay);
      if (callNow) {
        method.apply(context, args);
      }
    } else {
      timer = setTimeout(() => {
        method.apply(context, args);
      }, delay);
    }
  }
  return debounced;
};

export default debounce;
```