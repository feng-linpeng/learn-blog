## 掘金Bug收集
### bug列表接口 POST
https://api.juejin.cn/user_api/v1/bugfix/not_collect？aid=2608&uuid=7041468417022494241
### bug收集接口 POST
https://api.juejin.cn/user_api/v1/bugfix/collect?aid=2608&uuid=7041468417022494241

## 手机app
中国工商银行、个人所得税、招商银行、动卡空间、阿里云盘、uc、keep、高德、
钉钉、微信、qq、网易邮箱大师、boss、京东、淘宝、美团、叮咚、腾讯视频、qq音乐、喜马拉雅、掘金、支付宝、向日葵、慕课网、语雀
## PC应用
qq、微信、语雀、阿里云盘、有道、utools、chrome、VSCODE、微信开发者工具、hbuild，腾讯视频，wegame，steam


:tada:  :100:
::: tip
下面的是ts代码
:::

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