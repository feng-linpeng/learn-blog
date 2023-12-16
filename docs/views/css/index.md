# CSS属性记录

### 字体属性
```css
样式：font-style oblique;(偏斜体) italic;(斜体) normal;(正常)
粗细：font-weight bold;(粗体) lighter;(细体) normal;(正常)
变体： font-variant small-caps;(小型大写字母) normal;(正常)
大小写： text-transform capitalize;(首字母大写) uppercase;(大写) lowercase;(小写) none;(无)
修饰： text-decoration underline;(下划线) overline;(上划线) line-through;(删除线) blink;(闪烁)
常用字体：(font-family) "Courier New", Courier, monospace, "Times New Roman",Times, serif, Arial, Helvetica, sans-serif, Verdana
```

### 背景属性
```css
滚动：background-attachment:fixed;(固定) scroll;(滚动)
位置：background-position:left(水平) top(垂直);
简写方法：background: color image repeat fixed left top;
```

### 区块属性
```css
显示： display:block;(块) inline;(内嵌) list-item;(列表项) run-in;(追加部分) 
      compact;(紧凑) marker;(标记) table; inline-table;table-raw-group; 
      table-header-group; table-footer-group; table-raw; table-column-group;
      table-column; table-cell; table-caption;(表格标题)
字间距：letter-spacing:normal; 数值
对齐方式：text-align:justify;(两端对齐) left;(左对齐) right;(右对齐) center;(居中)
缩进：text-indent: 数值px;
垂直对齐 vertical-align: 
  baseline;(基线) 
  sub;(下标) 
  super;(下标) 
  top; 
  text-top; 
  middle;
  bottom; 
  text-bottom;
词间距 word-spacing:normal; 数值
空格 white-space:pre;(保留) nowrap;(不换行)
```

### border-style
```css
dotted;(点线) dashed;(虚线) solid; double;(双线) groove;(槽线) ridge;(脊状) inset;(凹陷) outset;
```

### OverFlow
```css
visible	默认值。内容不会被修剪，会呈现在元素框之外。
hidden	内容会被修剪，并且其余内容是不可见的。
scroll	内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。
auto	如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。
inherit	规定应该从父元素继承 overflow 属性的值。

```
