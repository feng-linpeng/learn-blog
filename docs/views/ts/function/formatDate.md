# FormatDate 时间格式化

``` ts
import { toEmpty } from '../toEmpty';
import Typer from '../typer';
// 日期格式
export const TIME_FORMAT: string = 'YYYY-MM-DD HH:mm:ss';
export const DATE_FORMAT: string = 'YYYY-MM-DD';
export const MONTH_FORMAT: string = 'YYYY-MM';
export const YEAR_FORMAT: string = 'YYYY';
/**
 * 时间格式化
 * @param format 转换格式 详见Constants定义时间格式
 * @param date 时间参数 1.new Date() 2.日期字符串 3.日期时间字符串 4.时间戳
 */
interface FormatParams {
  format?: string;
  date?: any;
}
const formatDate = ({ format = TIME_FORMAT, date = new Date() }: FormatParams = {}): string => {
  const matchDateTime = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/g; // 匹配日期时间 yyyy-mm-dd hh:mm:ss
  const matchDate = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/g; // 匹配日期 yyyy-mm-dd
  const matchTimeStamp = /[0-9]{13}|[0-9]{10}/g; // 匹配时间戳 13/10位时间戳
  // 重置传入时间格式
  let resetDate = typeof date === 'number' ? String(date) : date;
  if (!Typer.isDate(resetDate)) {
    if (resetDate.match(matchDate)) {
      resetDate = new Date(Date.parse(resetDate.replace(/-/g, '/')));
    } else if (resetDate.match(matchDateTime)) {
      resetDate = new Date(resetDate.replace(/-/g, '/'));
    } else if (resetDate.match(matchTimeStamp)) {
      const timeStamp = toEmpty.reStringEmpty(date);
      resetDate = new Date(timeStamp.length === 10 ? Number(date) * 1000 : Number(date));
    }
  }
  // 时间项(年，月，日，时，分，秒)
  const formatOptions = {
    'Y+': resetDate.getFullYear().toString(),
    'M+': (resetDate.getMonth() + 1).toString(),
    'D+': resetDate.getDate().toString(),
    'H+': resetDate.getHours().toString(),
    'm+': resetDate.getMinutes().toString(),
    's+': resetDate.getSeconds().toString()
  };
  const formatKeys = Object.keys(formatOptions);
  let formatValue: string = format;
  // 输出匹配的时间格式
  for (let index = 0; index < formatKeys.length; index += 1) {
    const execValue = new RegExp(`(${formatKeys[index]})`).exec(formatValue);
    if (execValue) {
      formatValue = formatValue.replace(
        execValue[1],
        execValue[1].length === 1
          ? formatOptions[formatKeys[index]]
          : formatOptions[formatKeys[index]].padStart(execValue[1].length, '0')
      ); // 如果匹配替换字符length大于1,为月日时分秒进行头部补0操作
    }
  }
  return formatValue;
};

export default formatDate;
```